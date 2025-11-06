import "./About.css";
import about from "../../assets/About.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <img className="about_label" src={about} alt="" />
      <h2 className="about__title"></h2>
      <p className="about__info"></p>
    </div>
  );
}

export default About;
