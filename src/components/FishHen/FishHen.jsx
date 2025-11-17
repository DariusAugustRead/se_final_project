import fishHenLabel from "../../assets/projectBeatEmUp.png";

import MiniProjectCard from "../MiniProjectCard/MiniProjectCard";

function FishHen() {
  return (
    <MiniProjectCard
      className="mini-project-card--center mini-project-card--compact"
      imgSrc={fishHenLabel}
      imgAlt="Project Beat 'em up"
      title="When politeness is taken advantage of"
      description={
        <>
          {`While out together, something very precious was taken and something
          they didn't know existed awoke inside of them. Two normally peaceful
          people are taken out of their comfort zone and have to become
          something that don't recognize.`}
        </>
      }
    />
  );
}

export default FishHen;
