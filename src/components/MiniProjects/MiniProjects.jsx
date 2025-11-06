import "./MiniProjects.css";
import name from "../../assets/miniProjects.png";
import { Link } from "react-router-dom";

function MiniProject() {
  return (
    <div className="mini_projects">
      <Link to="/mini_projects">
        <img src={name} alt="" />
      </Link>
    </div>
  );
}

export default MiniProject;
