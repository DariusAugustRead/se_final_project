import "./Footer.css";
import banner from "../../assets/Banner.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icon" />
      <img className="footer__banner" src={banner} alt="" />
    </footer>
  );
}

export default Footer;
