import "./Peephole.css";
import peepholeLabel from "../../assets/projectPeephole.png";

function Peephole() {
  return (
    <div className="peephole">
      <img className="peephole__label" src={peepholeLabel} alt="" />
      <h2 className="peephole__title">A silent adventure</h2>
      <p className="peephole__info">
        Discover the origin of a kidnapped animal modified by augmentation
        experiments as he discovers his new potential.
      </p>
    </div>
  );
}

export default Peephole;
