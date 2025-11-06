import "./MiniProjects.css";
import label from "../../assets/miniProjects.png";
import { Link } from "react-router-dom";

function MiniProject() {
  return (
    <div className="mini_projects">
      <img src={label} alt="" className="mini_projects__label" />
      <h2 className="mini_projects__title"></h2>
      <p className="mini_projects__info"></p>
    </div>
  );
}

export default MiniProject;
