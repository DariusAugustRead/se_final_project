// ...existing code...
import "./TapeStory.css";
import name from "../../assets/TapeStory.png";

import { useTranslation } from "react-i18next";

function TapeStory() {
  const { t } = useTranslation();

  return (
    <div className="tape-story">
      <img
        className="tape-story__label"
        src={name}
        alt={t("tapestory.headerAlt")}
      />
      <h4 className="tape-story__sublabel">{t("tapestory.sublabel")}</h4>

      <h3 className="tape-story__title">{t("tapestory.lead")}</h3>

      <h2 className="tape-story__title">{t("tapestory.sideATitle")}</h2>

      <p className="tape-story__info">{t("tapestory.sideA_p1")}</p>
      <p className="tape-story__info">{t("tapestory.sideA_p2")}</p>

      <div className="tape-story__video">
        <iframe
          className="tape-story__iframe"
          src="https://www.youtube.com/embed/zgnq6J3F4ng?si=-0NS3X_pgyawoOhu"
          title={t("tapestory.videoTitle")}
          style={{ border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <h2 className="tape-story__title">{t("tapestory.sideBTitle")}</h2>

      <p className="tape-story__info">{t("tapestory.sideB_p1")}</p>
      <p className="tape-story__info">{t("tapestory.sideB_p2")}</p>
    </div>
  );
}

export default TapeStory;
