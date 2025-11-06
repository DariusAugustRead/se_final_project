import "./Header.css";
import { Link } from "react-router-dom";

import name from "../../assets/name.png";
import aboutLabel from "../../assets/about.png";
import miniProjects from "../../assets/miniProjects.png";
import lightbyte from "../../assets/lightbyte.png";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/">
          <div className="header__left_logo" />
        </Link>
        <Link to="/about">
          <img src={aboutLabel} alt="" className="header__about-label" />
        </Link>
      </div>
      <div className="header__center">
        <img className="header__center_name" src={name} alt="" />
      </div>

      <div className="header__right">
        <Link to="/mini-projects">
          <img
            src={miniProjects}
            alt=""
            className="header__right_mini-projects"
          />
        </Link>
        <Link to="/lightbyte">
          <img src={lightbyte} alt="" className="header__right_lightbyte" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
