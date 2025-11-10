import "./FishHen.css";

import fishHenLabel from "../../assets/projectBeatEmUp.png";

function FishHen() {
  return (
    <div className="fish-hen">
      <img src={fishHenLabel} alt="" className="fish-hen__label" />
      <h2 className="fish-hen__title">When politeness is taken advantage of</h2>
      <div className="fish-hen__info">
        While out together, something very precious was taken and something they
        didn't know existed awoke inside of them. Two normally peaceful people
        are taken out of their comfort zone and have to become something that
        don't recognize.
      </div>
    </div>
  );
}

export default FishHen;
