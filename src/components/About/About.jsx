import "./About.css";
import about from "../../assets/About.png";

function About() {
  return (
    <div className="about">
      <img className="about__label" src={about} alt="About header" />
      <h2 className="about__title">My journey as a solo developer</h2>
      <p className="about__info">
        Hello all. I am pursuing my dream of becoming a game, and now, front-end
        web developer.
      </p>
      <p className="about__info">
        I have played video games my entire life. My first console was the Sega
        Genesis, and I could play it for hours, when I was left alone. At the
        time, I couldn't imagine that I would want to make them one day.
      </p>
      <p className="about__info">
        At around 17, I feel in love with retro, pixel art. I use to download
        sprite sheets and study the colors and how animation worked. My biggest
        inspiration came when I saw little game in a laundry mat named "Metal
        Slug 3". The expression that could be conveyed with tiny squares and a
        limited color palette were amazing to watch while the gameplay demo ran.
      </p>
      <p className="about__info">
        At 21, I went to the Art Institute of Dallas to study animation but,
        after it got too expensive and I learned that I would be creatively
        limited, I quit. I then tried to find ways to animated and possibly make
        games on my own.
      </p>
      <p className="about__info">
        I have tried programming with several game engines before but I never
        liked programming and I didn't stay consistent. I have also tried hiring
        programmers to work with but those relationships never developed into
        anything.
      </p>
      <p className="about__info">
        Now, in my 30s, after working many manual labor jobs and feeling
        unfulfilled, I have decided to pursue a career as a programmer. I
        thought about having a career in Cyber Security but after a little
        research, I didn't keep my interest. Then I found Triple Ten Software
        Engineering program and it felt like a better fit. This program has not
        been easy and I had to take multiple breaks and I have thought of giving
        up multiple times. But here I am working on my Final Project and the end
        is near.
      </p>
      <p className="about__info">
        I hope to continue building my Software Engineering career along with
        making my games and possible my universe on the side.
      </p>
    </div>
  );
}

export default About;
