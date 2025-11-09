import "./MiniProjects.css";
import label from "../../assets/miniProjects.png";

import Peephole from "../Peephole/Peephole";
import Planetary from "../Planetary/Planetary";
import FishHen from "../FishHen/FishHen";
import Famlet from "../Famlet/Famlet";

function MiniProject() {
  return (
    <div className="mini_projects">
      <img src={label} alt="" className="mini_projects__label" />
      <h2 className="mini_projects__title">
        These are the smaller projects I want to develop before I start on the
        larger ones
      </h2>
      <div className="mini_projects__body">
        <Peephole />
        <Planetary />
        <FishHen />
        <Famlet />
      </div>
    </div>
  );
}

export default MiniProject;
