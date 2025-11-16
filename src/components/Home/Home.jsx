import "./Home.css";
import { useEffect, useState } from "react";

function Home() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);
      // Try RAWG proxy first, fall back to sample JSON
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 3000);
        try {
          const res = await fetch(
            "http://localhost:4000/api/rawg/popular?page_size=9",
            { signal: controller.signal }
          );
          clearTimeout(timeout);
          if (!res.ok) throw new Error(`Proxy returned ${res.status}`);
          const data = await res.json();
          // RAWG returns `results` array
          setPhotos(data.results || []);
          setLoading(false);
          return;
        } catch (proxyErr) {
          console.warn(
            "RAWG proxy failed, falling back to sample:",
            proxyErr?.message || proxyErr
          );
        }
      } catch (err) {
        console.warn("Proxy attempt error:", err?.message || err);
      }

      try {
        // Use Vite base URL so this works when the site is served from a subpath
        const base =
          typeof import.meta !== "undefined"
            ? import.meta.env.BASE_URL || "/"
            : "/";
        const sampleRes = await fetch(`${base}rawg-sample.json`);
        if (!sampleRes.ok)
          throw new Error(`Sample fetch returned ${sampleRes.status}`);
        const sample = await sampleRes.json();
        setPhotos(sample.results || []);
      } catch (sampleErr) {
        console.error("Failed to load sample data:", sampleErr);
        setError(sampleErr.message || "Failed to load games");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="home">
      <p className="home__message">
        {loading
          ? "Loading games…"
          : error
          ? `Error: ${error}`
          : "Top games (RAWG)"}
      </p>

      {!loading && !error && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
            marginTop: 20,
          }}
        >
          {photos.map((g) => (
            <div
              key={g.id}
              style={{
                borderRadius: 6,
                overflow: "hidden",
                background: "#111",
              }}
            >
              <a
                href={g.website || g.url || `https://rawg.io/games/${g.slug}`}
                target="_blank"
                rel="noreferrer"
                style={{ display: "block" }}
              >
                {g.background_image ? (
                  <>
                    <img
                      src={g.background_image}
                      alt={g.name}
                      style={{ width: "100%", display: "block" }}
                      onError={(e) => {
                        // hide broken image and reveal placeholder
                        e.currentTarget.style.display = "none";
                        const ph =
                          e.currentTarget.parentElement.querySelector(
                            ".no-image"
                          );
                        if (ph) ph.style.display = "flex";
                      }}
                    />
                    <div
                      className="no-image"
                      style={{
                        display: "none",
                        height: 140,
                        background: "linear-gradient(135deg,#222,#111)",
                        color: "#fff",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        padding: 8,
                      }}
                    >
                      <div style={{ fontSize: 14 }}>{g.name}</div>
                    </div>
                  </>
                ) : (
                  <div style={{ height: 140, background: "#222" }} />
                )}
              </a>
              <div style={{ padding: 8 }}>
                <div style={{ fontWeight: "bold" }}>{g.name}</div>
                <div style={{ fontSize: 12, opacity: 0.8 }}>
                  {g.released || "Unknown"} • ⭐ {g.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
