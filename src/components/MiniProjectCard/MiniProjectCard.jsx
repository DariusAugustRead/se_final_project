import React from "react";
import "./MiniProjectCard.css";

function MiniProjectCard({
  imgSrc,
  imgAlt = "",
  title,
  description,
  className = "",
}) {
  return (
    <div className={`mini-project-card ${className}`}>
      {imgSrc ? (
        <img className="mini-project-card__label" src={imgSrc} alt={imgAlt} />
      ) : null}
      <h2 className="mini-project-card__title">{title}</h2>
      <div className="mini-project-card__description">
        {typeof description === "string" ? <p>{description}</p> : description}
      </div>
    </div>
  );
}

export default MiniProjectCard;
