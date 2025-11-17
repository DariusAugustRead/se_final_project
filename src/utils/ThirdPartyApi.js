/* eslint-env node */
import express from "express";
import dotenv from "dotenv";

// prefer `.env.local` for development, fall back to `.env`
dotenv.config({ path: ".env.local" });
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const RAWG_KEY = "2ba6aaa7fc3949c0ad590527a95a6f1b";
if (!RAWG_KEY) {
  console.warn(
    "Warning: RAWG_API_KEY is not set. Requests will fail until configured."
  );
}

function getFetch() {
  if (typeof fetch !== "undefined") return fetch;
  throw new Error(
    "global fetch is not available. Use Node 18+ or install a fetch polyfill (e.g. node-fetch)."
  );
}

app.get("/", (req, res) => {
  res.send(
    "RAWG proxy is running. See /api/rawg/popular or /api/rawg/search?q=... for usage."
  );
});

// Search games: proxied so the API key stays on the server
app.get("/api/rawg/search", async (req, res) => {
  const q = req.query.q || "";
  const page_size = Math.min(
    40,
    Math.max(1, parseInt(req.query.page_size) || 20)
  );
  const page = Math.max(1, parseInt(req.query.page) || 1);

  if (!RAWG_KEY)
    return res.status(500).json({ error: "RAWG_API_KEY not configured" });

  const url = `https://api.rawg.io/api/games?search=${encodeURIComponent(
    q
  )}&page_size=${page_size}&page=${page}&key=${RAWG_KEY}`;
  try {
    const fetchFn = getFetch();
    const r = await fetchFn(url);
    const data = await r.json();
    res.status(r.status).json(data);
  } catch (err) {
    console.error("RAWG search error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Popular / curated games
app.get("/api/rawg/popular", async (req, res) => {
  const page_size = Math.min(
    40,
    Math.max(1, parseInt(req.query.page_size) || 9)
  );
  const page = Math.max(1, parseInt(req.query.page) || 1);

  if (!RAWG_KEY)
    return res.status(500).json({ error: "RAWG_API_KEY not configured" });

  // ordering by rating desc
  const url = `https://api.rawg.io/api/games?ordering=-rating&page_size=${page_size}&page=${page}&key=${RAWG_KEY}`;
  try {
    const fetchFn = getFetch();
    const r = await fetchFn(url);
    const data = await r.json();
    res.status(r.status).json(data);
  } catch (err) {
    console.error("RAWG popular error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () =>
  console.log(`RAWG proxy listening on http://localhost:${PORT}`)
);
