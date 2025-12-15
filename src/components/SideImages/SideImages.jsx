import PropTypes from "prop-types";

import sideImg from "../../assets/side_panel_recolor.png";
import "./SideImages.css";

function SideImage({ side = "left" }) {
  const panel = `sideImage sideImage-${side}`;
  return <img src={sideImg} alt="" aria-hidden="true" className={panel} />;
}

SideImage.propTypes = {
  side: PropTypes.string,
};

export default SideImage;
