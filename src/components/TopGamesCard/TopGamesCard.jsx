import "./TopGamesCard.css";

function TopGamesCard({ game }) {
  return (
    <div className="top-games-card">
      <a
        className="top-games-card__link"
        href={game.website || game.url || `https://rawg.io/games/${game.slug}`}
        target="_blank"
        rel="noreferrer"
      >
        {game.background_image ? (
          <>
            <img
              className="top-games-card__image"
              src={game.background_image}
              alt={game.name}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const ph = e.currentTarget.parentElement.querySelector(
                  ".top-games-card__no-image"
                );
                if (ph) ph.style.display = "flex";
              }}
            />
            <div className="top-games-card__no-image">
              <div className="top-games-card__no-image-title">{game.name}</div>
            </div>
          </>
        ) : (
          <div className="top-games-card__placeholder" />
        )}
      </a>

      <div className="top-games-card__body">
        <div className="top-games-card__title">{game.name}</div>
        <div className="top-games-card__meta">
          {game.released || "Unknown"} • ⭐ {game.rating}
        </div>
      </div>
    </div>
  );
}

export default TopGamesCard;
