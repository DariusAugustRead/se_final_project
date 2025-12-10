import tripletLabel from "../../assets/English/projectTurnBased.png";

import MiniProjectCard from "../MiniProjectCard/MiniProjectCard";
import { useTranslation } from "react-i18next";

function Triplet() {
  const { t } = useTranslation();

  return (
    <MiniProjectCard
      className="mini-project-card--center mini-project-card--compact"
      imgSrc={tripletLabel}
      imgAlt={t("triplet.headerAlt")}
      title={t("triplet.title")}
      description={<>{t("triplet.description")}</>}
    />
  );
}

export default Triplet;
