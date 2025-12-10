import peepholeLabel from "../../assets/English/projectRabbit.png";

import MiniProjectCard from "../MiniProjectCard/MiniProjectCard";
import { useTranslation } from "react-i18next";

function Peephole() {
  const { t } = useTranslation();

  return (
    <MiniProjectCard
      className="mini-project-card--center mini-project-card--compact"
      imgSrc={peepholeLabel}
      imgAlt={t("peephole.headerAlt")}
      title={t("peephole.title")}
      description={<>{t("peephole.description")}</>}
    />
  );
}
export default Peephole;
