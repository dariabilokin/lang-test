// components/LanguageSelector.tsx
import { useTranslation } from "react-i18next";
import React from "react";

const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();

  //   const [selectedLanguage, setSelectedLanguage] = useState<string>();
  //   useEffect(() => {
  //     // Retrieve data from local storage on component mount
  //     const storedData = localStorage.getItem("selectedLanguage");
  //     if (storedData) {
  //       setSelectedLanguage(storedData);
  //     }
  //   }, []);

  const handleLanguageChange = async (newLanguage: string) => {
    localStorage.setItem("selectedLanguage", newLanguage);
    document.cookie = `selectedLanguage=${newLanguage}; path=/`;
    window.localStorage.setItem("MY_LANGUAGE", newLanguage);
    await i18n.changeLanguage(newLanguage);
  };

  const languages = [
    { code: "en", translateKey: "english" },
    { code: "fr", translateKey: "french" },
    { code: "ukr", translateKey: "ukrainian" },
  ];
  return (
    <div>
      <div className="my-4 flex flex-row gap-3">
        {languages.map((language) => (
          <button
            // className="rounded bg-blue-500 px-4 py-2 font-bold text-white"
            data-id={`${language.code}-button`}
            className={
              i18n.language === language.code
                ? "rounded bg-blue-300 px-4 py-2 font-bold text-gray-700"
                : "rounded bg-gray-100 px-4 py-2 font-bold text-gray-700"
            }
            onClick={() => handleLanguageChange(language.code)}
            key={language.code}
          >
            {t(language.translateKey)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
