import "./Planetary.css";
import planetLabel from "../../assets/projectPlanet.png";

function Planetary() {
  return (
    <div className="planet">
      <img className="planet__label" src={planetLabel} alt="" />
      <h2 className="planet__title">When innocence gets tainted</h2>
      <p className="planet__info">
        The land is "new" and the creator creates beings He suitable for the
        tasks. Follow the story about one finding her purpose when all she has
        is her instincts.
      </p>
    </div>
  );
}

export default Planetary;
