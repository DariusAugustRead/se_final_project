import "./MiniProjects.css";
import label from "../../assets/miniProjects.png";

import Planetary from "../Planetary/Planetary";
import FishHen from "../FishHen/FishHen";
import Famlet from "../Famlet/Famlet";

function MiniProject() {
  return (
    <div className="mini_projects">
      <img src={label} alt="" className="mini_projects__label" />
      <h2 className="mini_projects__title"></h2>
      <p className="mini_projects__body">
        <Planetary />
        <FishHen />
        <Famlet />
      </p>
    </div>
  );
}

export default MiniProject;
