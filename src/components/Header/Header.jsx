import "./Header.css";
import { Link } from "react-router-dom";

import aboutLabel from "../../assets/about.png";
import aboutLabelHover from "../../assets/about_hover.png";
import miniProjects from "../../assets/miniProjects.png";
import miniProjectsHover from "../../assets/miniProjects_hover.png";
import lightbyte from "../../assets/lightbyte.png";
import lightbyteHover from "../../assets/lightbyte_hover.png";
import name from "../../assets/name.png";
import banner from "../../assets/banner.png";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/">
          <div className="header__left_logo" />
        </Link>
        <Link to="/about">
          <img
            src={aboutLabel}
            alt="About"
            className="header__about-label header__about-label--default"
          />
          <img
            src={aboutLabelHover}
            alt="About hover"
            className="header__about-label header__about-label--hover"
          />
        </Link>
      </div>
      <div className="header__center">
        <img className="header__center_name" src={name} alt="" />
        <img className="header__center_banner " src={banner} alt="" />
      </div>

      <div className="header__right">
        <Link to="/mini-projects">
          <img
            src={miniProjects}
            alt="Mini Projects"
            className="header__right_mini-projects header__right_mini-projects--default"
          />
          <img
            src={miniProjectsHover}
            alt="Mini Projects hover"
            className="header__right_mini-projects header__right_mini-projects--hover"
          />
        </Link>
        <Link to="/lightbyte">
          <img
            src={lightbyte}
            alt="Lightbyte"
            className="header__right_lightbyte header__right_lightbyte--default"
          />
          <img
            src={lightbyteHover}
            alt="Lightbyte hover"
            className="header__right_lightbyte header__right_lightbyte--hover"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
