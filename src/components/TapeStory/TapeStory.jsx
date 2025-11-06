import "./TapeStory.css";
import name from "../../assets/TapeStory.png";

function TapeStory() {
  return (
    <div className="tape-story">
      <img className="tape-story__label" src={name} alt="" />
      <p className="tape-story__info">
        This is my current game dev project.
        <br />
        <br />
        The story can be and should be experienced in two ways.
      </p>
    </div>
  );
}

export default TapeStory;
