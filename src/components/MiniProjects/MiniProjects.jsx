import "./MiniProjects.css";
import label from "../../assets/English/miniProjects.png";

import Tapestory from "../TapeStory/TapeStory";
import Peephole from "../Peephole/Peephole";
import Planetary from "../Planetary/Planetary";
import FishHen from "../FishHen/FishHen";
import Triplet from "../Triplet/Triplet";

import { useTranslation } from "react-i18next";

function MiniProject() {
  const { t } = useTranslation();

  return (
    <div className="mini_projects">
      <img src={label} alt="" className="mini_projects__label" />
      <h2 className="mini_projects__title">
        {t("miniProjects.title")}
        <span>{t("miniProjects.subtitle")}</span>
        <br />
        <br />
      </h2>
      <div className="mini_projects__body">
        <Tapestory />
        <Peephole />
        <Planetary />
        <FishHen />
        <Triplet />
      </div>
    </div>
  );
}

export default MiniProject;
