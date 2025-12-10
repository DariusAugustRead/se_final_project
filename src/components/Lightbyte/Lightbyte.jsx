import "./Lightbyte.css";
import label from "../../assets/English/lightbyte.png";

function Lightbyte() {
  return (
    <div className="lightbyte">
      <img className="lightbyte__label" src={label} alt="Lightbyte header" />

      <h2 className="lightbyte__title">The Pilot</h2>
      <p className="lightbyte__info">
        Following the traditions of old, the current inhabitants have sorted
        themselves into 3 proper trade professions - farmers, fishermen and
        cooks and they prided themselves on hard work. There were also those
        that practiced ancient <b className="red"> magic</b>, but lived outside
        of proper society and they prided themselves in spiritual manipulation.
      </p>
      <p className="lightbyte__info">
        There was also a family, that did not fit in with either group, living
        somewhere in the middle, (A grandmother, her daughter, her son-in-law
        and her 3 grandchildren) that believed in hard work but they were also
        spiritually influenced.
      </p>
      <p className="lightbyte__info">
        {`One night while the grandmother was talking to the parents about a
        reoccuring dream she was having, the family's home was
        approached. Before they were compromised, the kids where hidden in a
        secret place under the floor boards and told to not leave.`}
      </p>
      <p className="lightbyte__info">
        They kids heard fighting happening until everything eventually got
        silent. The kids left their hiding place, find their dead parents and
        noticed that their grandmother was missing.
      </p>
      <p className="lightbyte__info">
        While they grieved, 3 rays of light shined on them and a voice spoke
        comforting them and it gave them abilities and a sense of purpose.
      </p>
      <div className="lightbyte__info-group">
        <p className="lightbyte__info">
          Eldest son - Physical Strength and Defense
          <br />
          Younger daughter - Ranged Accuracy and Enhanced vision
          <br />
          Youngest son - Speed and Agility
        </p>
      </div>
      <p className="lightbyte__info">
        The children had to leave the only place they had known and followed the
        voices instruction.
      </p>

      <h2 className="lightbyte__title">The Present</h2>
      <p className="lightbyte__info">
        There was a cartoon pilot written to be the sequel to a popular graphic
        novel. As an eight year kid, that loved the novel, you looked forward to
        the show coming out but it never aired and was never mentioned again.
        Now, as an adult, you thought about your childhood and wondered what
        happened to the show. One evening after work, you decide to go online
        and research what happened to it and you came across the pilot episode.
        You liked it but the articles written about it said that the show was
        cancelled (possibly for religious undertones) and it could not be
        merchandised.
      </p>
      <p className="lightbyte__info">
        You lie in bed, that night, thinking about the kid you were (struggling
        with <b className="yellow">school</b>, being socially awkward and
        playing video games to cope) and how you might have liked an explanation
        back then until you eventually fall asleep.
      </p>
      <p className="lightbyte__info">
        You open your eyes in a familiar looking hut. When you get up and move
        around, you notice that you have shrank and are in some comfortable
        pajamas. When you exit the hut, you realize where you are, feeling
        scared and excited at the same time.
      </p>

      <h2 className="lightbyte__title">The Premise</h2>
      <p className="lightbyte__info">
        You play as an adult, in your child body, navigating the warped
        <b className="blue"> blend</b> of your past {`life's`} concerns and the
        show you recently reacquanted yourself with.
      </p>
      <p className="lightbyte__info">
        In this Metroidvania, the world opens up and develops before your eyes
        and you must use your newly acquired skills to fight and move through it
        to get some kind of closure for your inner child.
      </p>
    </div>
  );
}

export default Lightbyte;
