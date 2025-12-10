import "./LanguageSwitcher.css";

import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div
      className="language-switcher"
      role="navigation"
      aria-label="Language switcher"
    >
      <button onClick={() => i18n.changeLanguage("en")} aria-label="English">
        EN
      </button>
      <button onClick={() => i18n.changeLanguage("es")} aria-label="Spanish">
        ES
      </button>
    </div>
  );
}
