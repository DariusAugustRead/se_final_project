import "./Footer.css";
import faceIcon from "../../assets/faceIcon.png";
import banner from "../../assets/Banner.png";

function Footer() {
  return (
    <div className="footer">
      <img className="footer__icon" src={faceIcon} alt="" />
      <img className="footer__banner" src={banner} alt="" />
    </div>
  );
}

export default Footer;
