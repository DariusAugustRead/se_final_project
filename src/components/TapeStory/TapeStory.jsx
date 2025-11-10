import "./TapeStory.css";
import name from "../../assets/TapeStory.png";

function TapeStory() {
  return (
    <div className="tape-story">
      <img className="tape-story__label" src={name} alt="" />
      <h4 className="tape-story__sublabel">
        This is my current game dev project.
      </h4>
      <h3 className="tape-story__title">
        This story is fully told when heard from both sides
      </h3>{" "}
      <h2 className="tape-story__title">Side A</h2>{" "}
      <p className="tape-story__info">
        You play as a boy training as a mining apprentice. One day at the end of
        a shift, you hear your adult co-workers talking about the abandoned mine
        sealed off due to something happening. Out of curiousity you sneak off
        one night, with your rooster, and try to peak through the cracks of the
        seal when it breaks and you fall in.
      </p>
      <p className="tape-story__info">
        You must climb out of the bottom of the pit, trying to escape the gas
        and other hazards to return to the surface.{" "}
      </p>
      <h2 className="tape-story__title">Side B</h2>{" "}
      <p className="tape-story__info">
        Outside of the atmosphere, you play as a girl piloting a space jet.
        While patrolling your planet, you see a bleep on your radar and you go
        check it out. As you get closer, you notices that it swiftly approaches
        you before speeding past you. You panic, quickly turning around and
        pursuing it.
      </p>
      <p className="tape-story__info">
        You must fight back against the incoming hoards of enemies, trying to
        reach the planet before what every that thing was, does.
      </p>
    </div>
  );
}

export default TapeStory;
