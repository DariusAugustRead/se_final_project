import "./Header.css";
import name from "../../assets/Name.png";
import { Link } from "react-router-dom";

import About from "../About/About";
import TapeStory from "../TapeStory/TapeStory";
import ProjectLight from "../ProjectLight/ProjectLight";
import GraphicNovel_1 from "../GraphicNovel_1/GraphicNovel_1";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/">
          <div className="header__left_logo" />
        </Link>
        <About />
      </div>
      <div className="header__center">
        <img className="header__center_name" src={name} alt="" />
      </div>

      <div className="header__right">
        <Link to="/tape_story">
          <TapeStory />
        </Link>
        <Link to="/project-light">
          <ProjectLight />
        </Link>
        <Link to="/project-light">
          <GraphicNovel_1 />
        </Link>
      </div>
    </header>
  );
}

export default Header;
