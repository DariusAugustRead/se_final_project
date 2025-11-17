import "./MiniProjectCard.css";
import PropTypes from "prop-types";

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

MiniProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
};

MiniProjectCard.defaultProps = {
  imgSrc: null,
  imgAlt: "",
  description: null,
  className: "",
};

export default MiniProjectCard;
