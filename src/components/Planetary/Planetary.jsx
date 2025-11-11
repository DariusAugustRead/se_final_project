import planetLabel from "../../assets/projectPlanet.png";

import MiniProjectCard from "../MiniProjectCard/MiniProjectCard";

function Planetary() {
  return (
    <MiniProjectCard
      className="mini-project-card--center mini-project-card--compact"
      imgSrc={planetLabel}
      imgAlt="Project Planet"
      title="When innocence gets tainted"
      description={
        <>
          The land is "new" and the creator creates beings He suitable for the
          tasks. Follow the story about one finding her purpose when all she has
          is her instincts.
        </>
      }
    />
  );
}

export default Planetary;
