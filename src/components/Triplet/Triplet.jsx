import "./triplet.css";

import tripletLabel from "../../assets/projectTurnBased.png";

function triplet() {
  return (
    <div className="triplet">
      <img className="triplet__label" src={tripletLabel} alt="" />
      <h2 className="triplet__title">
        There can be an advantage in differences
      </h2>
      <p className="triplet__info">
        Take a group of hired mercenaries on an adventure in a medieval land to
        reseal the portal and rebalance the land. Out of the <b>4</b> experts,
        the king must choose the <b>3</b> he thinks are better for the job. The
        3 learn to trust each other through their shared struggle.
      </p>
    </div>
  );
}

export default triplet;
