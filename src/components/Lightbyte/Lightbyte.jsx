import "./Lightbyte.css";
import label from "../../assets/English/lightbyte.png";

import { useTranslation } from "react-i18next";

function Lightbyte() {
  const { t } = useTranslation();

  return (
    <div className="lightbyte">
      <img
        className="lightbyte__label"
        src={label}
        alt={t("lightbyte.headerAlt")}
      />

      <h2 className="lightbyte__title">{t("lightbyte.pilotTitle")}</h2>
      <p className="lightbyte__info">{t("lightbyte.pilot_p1")}</p>
      <p className="lightbyte__info">{t("lightbyte.pilot_p2")}</p>
      <p className="lightbyte__info">{t("lightbyte.pilot_p3")}</p>
      <p className="lightbyte__info">{t("lightbyte.pilot_p4")}</p>
      <p className="lightbyte__info">{t("lightbyte.pilot_p5")}</p>
      <div className="lightbyte__info-group">
        <p className="lightbyte__info">{t("lightbyte.pilot_list")}</p>
      </div>
      <p className="lightbyte__info">{t("lightbyte.pilot_p7")}</p>

      <h2 className="lightbyte__title">{t("lightbyte.presentTitle")}</h2>
      <p className="lightbyte__info">{t("lightbyte.present_p1")}</p>
      <p className="lightbyte__info">{t("lightbyte.present_p2")}</p>
      <p className="lightbyte__info">{t("lightbyte.present_p3")}</p>

      <h2 className="lightbyte__title">{t("lightbyte.premiseTitle")}</h2>
      <p className="lightbyte__info">{t("lightbyte.premise_p1")}</p>
      <p className="lightbyte__info">{t("lightbyte.premise_p2")}</p>
    </div>
  );
}

export default Lightbyte;
