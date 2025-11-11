import tripletLabel from "../../assets/projectTurnBased.png";

import MiniProjectCard from "../MiniProjectCard/MiniProjectCard";

function Triplet() {
  return (
    <MiniProjectCard
      className="mini-project-card--center mini-project-card--compact"
      imgSrc={tripletLabel}
      imgAlt="Project Turn Based"
      title="There can be an advantage in differences"
      description={
        <>
          Take a group of hired mercenaries on an adventure in a medieval land
          to reseal the portal and rebalance the land. Out of the <b>4</b>{" "}
          experts, the king must choose the <b>3</b> he thinks are better for
          the job. The 3 learn to trust each other through their shared
          struggle.
        </>
      }
    />
  );
}

export default Triplet;
