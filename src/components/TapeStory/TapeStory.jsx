import "./TapeStory.css";
import name from "../../assets/TapeStory.png";

function TapeStory() {
  return (
    <div className="tape-story">
      <img className="tape-story__label" src={name} alt="" />
      <div className="tape-story__info">
        <h3>This is my current game dev project.</h3>{" "}
        <p>
          The story can and should be experienced in two ways, <u>Side A</u> and{" "}
          <u>Side B</u>.
        </p>{" "}
        <p>
          In Side A, you play as a boy that is a mining apprentice. You hear
          your adult co-workers talking about the mine that was closed off due
          to toxic fumes that rose when the core was reached. Out of curiousity
          you sneak off one night, with your rooster, and try to peak through
          the cracks of seal when it breaks and you fall in.
        </p>
        <p>
          You must jump out of the bottom of the pit, dodging the gas and other
          hazards to return to the surface.{" "}
        </p>
      </div>
    </div>
  );
}

export default TapeStory;
