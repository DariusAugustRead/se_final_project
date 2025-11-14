import express from "express";
import puppeteer from "puppeteer";
import sharp from "sharp";

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
    await page.goto(target, { waitUntil: "networkidle2" });
    const buffer = await page.screenshot({ fullPage: true, type: "png" });

    if (scale && scale !== 1) {
      const meta = await sharp(buffer).metadata();
      const intendedWidth = Math.max(1, Math.round(meta.width * scale));
      const newWidth = Math.max(720, intendedWidth);
      const resizeFactor = newWidth / meta.width;
      const newHeight = Math.max(1, Math.round(meta.height * resizeFactor));
      const resized = await sharp(buffer)
        .resize(newWidth, newHeight)
        .png()
        .toBuffer();
      res.set("Content-Type", "image/png");
      res.send(resized);
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
