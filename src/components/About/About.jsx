import "./About.css";
import about from "../../assets/English/About.png";

import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about">
      <img className="about__label" src={about} alt={t("about.headerAlt")} />
      <h2 className="about__title">{t("about.title")}</h2>
      <p className="about__info">{t("about.p1")}</p>
      <p className="about__info">{t("about.p2")}</p>
      <p className="about__info">{t("about.p3")}</p>
      <p className="about__info">{t("about.p4")}</p>
      <p className="about__info">{t("about.p5")}</p>
      <p className="about__info">{t("about.p6")}</p>
      <p className="about__info">{t("about.p7")}</p>
    </div>
  );
}

export default About;
