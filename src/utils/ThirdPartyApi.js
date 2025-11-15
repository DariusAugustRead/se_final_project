import express from "express";
import puppeteer from "puppeteer";

const PORT = process.env.PORT || 4000;
const app = express();

// simple CORS for dev
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/screenshot", async (req, res) => {
  const target = req.query.url || "http://localhost:5173/";

  const scaleQuery = req.query.scale;
  const scale = scaleQuery
    ? Math.max(0.01, Math.min(5, parseFloat(scaleQuery)))
    : 0.75;

  let browser;
  try {
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    // determine viewport width so CSS media queries behave like the target device
    // priority: explicit viewportWidth -> maxWidth -> default 1200
    const viewportWidthParam = req.query.viewportWidth
      ? Math.max(1, parseInt(req.query.viewportWidth, 10))
      : null;
    const maxWidthParam = req.query.maxWidth
      ? Math.max(1, parseInt(req.query.maxWidth, 10))
      : null;
    const viewportWidth = viewportWidthParam || maxWidthParam || 1200;

    await page.setViewport({
      width: viewportWidth,
      height: 900,
      deviceScaleFactor: 1,
    });
    await page.goto(target, { waitUntil: "networkidle2" });

    // allow callers to screenshot a specific element to avoid capturing fixed headers
    const selector = req.query.selector;
    let buffer;
    if (selector) {
      // wait for the element and screenshot only that element
      await page.waitForSelector(selector, { timeout: 3000 }).catch(() => null);
      const el = await page.$(selector);
      if (!el) {
        res.status(400).send(`Selector not found: ${selector}`);
        return;
      }
      buffer = await el.screenshot({ type: "png" });
    } else {
      buffer = await page.screenshot({ fullPage: true, type: "png" });
    }

    // debug: report page widths so we can see which viewport was used
    try {
      const pageInnerWidth = await page.evaluate(() => ({
        inner: window.innerWidth,
        doc: document.documentElement.clientWidth,
      }));
      console.log(
        `Viewport width used: ${viewportWidth}, page.innerWidth: ${pageInnerWidth.inner}, document.clientWidth: ${pageInnerWidth.doc}`
      );
    } catch (e) {
      // ignore
    }

    // Resize when requested (either by explicit maxWidth or scale != 1)
    if (maxWidthParam || (scale && scale !== 1)) {
      const b64 = buffer.toString("base64");
      const mime = "image/png";
      const dataUrl = `data:${mime};base64,${b64}`;

      const resizedDataUrl = await page.evaluate(
        async ({ src, maxWidth, scale }) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              try {
                const requestedScale =
                  scale && !Number.isNaN(Number(scale)) ? Number(scale) : 1;
                const origW = img.width;
                const scaledW = Math.max(1, Math.round(origW * requestedScale));
                let newW = scaledW;
                if (maxWidth) newW = Math.min(newW, Number(maxWidth));
                newW = Math.max(1, newW);
                const newH = Math.max(
                  1,
                  Math.round((img.height * newW) / img.width)
                );

                const c = document.createElement("canvas");
                c.width = newW;
                c.height = newH;
                const ctx = c.getContext("2d");
                ctx.drawImage(img, 0, 0, newW, newH);
                resolve(c.toDataURL("image/png"));
              } catch (err) {
                reject(err);
              }
            };
            img.onerror = (e) => reject(e);
            img.src = src;
          });
        },
        { src: dataUrl, maxWidth: maxWidthParam || null, scale: scale }
      );

      const base64Resized = resizedDataUrl.split(",")[1];
      const outBuffer = Buffer.from(base64Resized, "base64");
      res.set("Content-Type", "image/png");
      res.send(outBuffer);
    } else {
      res.set("Content-Type", "image/png");
      res.send(buffer);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Screenshot error: " + err.message);
  } finally {
    if (browser) await browser.close();
  }
});

app.listen(PORT, () =>
  console.log(`Screenshot API listening on http://localhost:${PORT}`)
);
