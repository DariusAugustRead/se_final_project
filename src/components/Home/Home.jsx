import "./Home.css";
import giantLogo from "../../assets/logo_upright_giant.png";
import { useState } from "react";

function Home() {
  const [screenshotUrl, setScreenshotUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleCapture() {
    setLoading(true);
    setError(null);
    setScreenshotUrl(null);
    try {
      // Match the port in your server file (currently PORT = 3000)
      const api = `http://localhost:4000/api/screenshot?url=${encodeURIComponent(
        window.location.href
      )}`;
      const res = await fetch(api);
      if (!res.ok) throw new Error(`Screenshot API returned ${res.status}`);
      const blob = await res.blob();
      setScreenshotUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      setError(err.message || "Capture failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="home">
      {screenshotUrl ? (
        <img
          className="home__image"
          src={screenshotUrl}
          alt="screenshot"
          style={{
            width: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
            height: "auto",
          }}
        />
      ) : (
        <img
          className="home__image"
          src={giantLogo}
          alt="Giant logo"
          onClick={handleCapture}
          style={{ cursor: "pointer" }}
        />
      )}

      <p className="home__message">
        {loading
          ? "Capturing…"
          : error
          ? `Error: ${error}`
          : "Click this photo to take a screenshot of this page"}
      </p>

      {screenshotUrl && (
        <div style={{ marginTop: 8 }}>
          <a
            className="home__download_message"
            href={screenshotUrl}
            download="screenshot.png"
          >
            Download screenshot
          </a>
          <button
            className="home__reset-btn"
            onClick={() => {
              URL.revokeObjectURL(screenshotUrl);
              setScreenshotUrl(null);
            }}
            style={{ marginLeft: 40 }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
