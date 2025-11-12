import sideImg from "../../assets/side_panel_recolor.png";
import "./SideImages.css";

function SideImage({ side = "left" }) {
  const panel = `sideimage side-${side}`;
  return <img src={sideImg} alt="" aria-hidden="true" className={panel} />;
}

export default SideImage;
