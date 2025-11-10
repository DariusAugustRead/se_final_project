import "./Famlet.css";

import famletLabel from "../../assets/projectTurnBased.png";

function Famlet() {
  return (
    <div className="famlet">
      <img className="famlet__label" src={famletLabel} alt="" />
      <h2 className="famlet__title">
        There can be an advantage in differences
      </h2>
      <p className="famlet__info">
        Take a group of hired mercenaries on an adventure in a medieval land to
        reseal the portal and rebalance the land. Out of the <b>4</b> experts,
        the king must choose the <b>3</b> he thinks are better for the job. The
        3 learn to trust each other through their shared struggle.
      </p>
    </div>
  );
}

export default Famlet;
