import "./Lightbyte.css";
import label from "../../assets/lightbyte.png";

function Lightbyte() {
  return (
    <div className="lightbyte">
      <img className="lightbyte_label" src={label} alt="" />
      <h2 className="lightbyte__title"></h2>
      <p className="lightbyte__info"></p>
      <p className="lightbyte__info"></p>
      <p className="lightbyte__info"></p>
    </div>
  );
}

export default Lightbyte;
