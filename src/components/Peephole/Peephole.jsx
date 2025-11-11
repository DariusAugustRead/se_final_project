import peepholeLabel from "../../assets/projectPeephole.png";

import MiniProjectCard from "../MiniProjectCard/MiniProjectCard";

function Peephole() {
  return (
    <MiniProjectCard
      className="mini-project-card--center mini-project-card--compact"
      imgSrc={peepholeLabel}
      imgAlt="Project Peep"
      title="A silent adventure"
      description={
        <>
          Discover the origin of a poached animal modified by augmentation
          experiments as he discovers his new potential in the outside world.
        </>
      }
    />
  );
}
export default Peephole;
