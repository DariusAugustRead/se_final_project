// ...existing code...
import fishHenLabel from "../../assets/English/projectBeatEmUp.png";

import MiniProjectCard from "../MiniProjectCard/MiniProjectCard";
import { useTranslation } from "react-i18next";

function FishHen() {
  const { t } = useTranslation();

  return (
    <MiniProjectCard
      className="mini-project-card--center mini-project-card--compact"
      imgSrc={fishHenLabel}
      imgAlt={t("fishhen.headerAlt")}
      title={t("fishhen.title")}
      description={<>{t("fishhen.description")}</>}
    />
  );
}

export default FishHen;
// ...existing code...
