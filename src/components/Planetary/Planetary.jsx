import "./Planetary.css";
import planetLabel from "../../assets/projectPlanet.png";

function Planetary() {
  return (
    <div className="planet">
      <img src={planetLabel} alt="" className="planet__label" />
    </div>
  );
}

export default Planetary;
