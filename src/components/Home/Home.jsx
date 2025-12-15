import "./Home.css";
import { useEffect, useState } from "react";
import { getPopular } from "../../utils/rawgClient";
import TopGamesCard from "../TopGamesCard/TopGamesCard";

function Home() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);
      try {
        try {
          const data = await getPopular({ page_size: 9 });
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
      <p className="home__title">
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
            <TopGamesCard key={g.id} game={g} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
