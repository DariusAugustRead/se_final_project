import "./MiniProjects.css";
import label from "../../assets/miniProjects.png";

import Tapestory from "../TapeStory/TapeStory";
import Peephole from "../Peephole/Peephole";
import Planetary from "../Planetary/Planetary";
import FishHen from "../FishHen/FishHen";
import Triplet from "../Triplet/Triplet";

function MiniProject() {
  return (
    <div className="mini_projects">
      <img src={label} alt="" className="mini_projects__label" />
      <h2 className="mini_projects__title">
        These are the smaller projects I plan on developing before I develop the
        larger ones <span>(Larger projects not listed)</span>
        <br />
        <br />
      </h2>
      <div className="mini_projects__body">
        <Tapestory />
        <Peephole />
        <Planetary />
        <FishHen />
        <Triplet />
      </div>
    </div>
  );
}

export default MiniProject;
