import "./Footer.css";
import faceIcon from "../../assets/faceIcon.png";
import banner from "../../assets/Banner.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icon" />
      <img className="footer__banner" src={banner} alt="" />
    </div>
  );
}

export default Footer;
