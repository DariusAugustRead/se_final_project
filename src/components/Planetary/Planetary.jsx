import planetLabel from "../../assets/English/projectPlanet.png";

import MiniProjectCard from "../MiniProjectCard/MiniProjectCard";
import { useTranslation } from "react-i18next";

function Planetary() {
  const { t } = useTranslation();

  return (
    <MiniProjectCard
      className="mini-project-card--center mini-project-card--compact"
      imgSrc={planetLabel}
      imgAlt={t("planetary.headerAlt")}
      title={t("planetary.title")}
      description={<>{t("planetary.description")}</>}
    />
  );
}

export default Planetary;
