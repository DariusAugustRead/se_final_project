import "./About.css";
import about from "../../assets/About.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Link to="/about">
        <img className="about_label" src={about} alt="" />
      </Link>
    </div>
  );
}

export default About;
