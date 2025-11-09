import "./FishHen.css";

import fishHenLabel from "../../assets/projectBeatEmUp.png";

function FishHen() {
  return (
    <div className="fish-hen">
      <img src={fishHenLabel} alt="" className="fish-hen__label" />
      <div className="fish-hen__body"></div>
    </div>
  );
}

export default FishHen;
