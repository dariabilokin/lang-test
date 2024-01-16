// components/LanguageSelector.tsx

import React, { useEffect, useState } from "react";

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>();
  useEffect(() => {
    // Retrieve data from local storage on component mount
    const storedData = localStorage.getItem("selectedLanguage");
    if (storedData) {
      setSelectedLanguage(storedData);
    }
  }, []);

  const handleLanguageChange = (newLanguage: string) => {
    setSelectedLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", newLanguage);
    document.cookie = `selectedLanguage=${newLanguage}; path=/`;
  };

  return (
    <div>
      <p>Selected Language: {selectedLanguage}</p>
      <select
        value={selectedLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        <option value="en">English</option>
        <option value="fr">French</option>

        <option value="ukr">Ukrainian</option>
        {/* Add more language options as needed */}
      </select>
    </div>
  );
};

export default LanguageSelector;
