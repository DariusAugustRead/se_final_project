import "./Footer.css";
import faceIcon from "../../assets/faceIcon.png";
import name from "../../assets/Name.png";

function Footer() {
  return (
    <div className="footer">
      <img className="footer__icon" src={faceIcon} alt="" />
      <img className="footer__name" src={name} alt="" />
    </div>
  );
}

export default Footer;
