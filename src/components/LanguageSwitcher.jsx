import { useState } from "react";
import { FaLanguage } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const LanguageSwitcher = ({ changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  // Language flags
  const flags = {
    en: "🇬🇧",
    fr: "🇫🇷",
    ar: "🇩🇿",
  };

  // Get the current language
  const currentLang = i18n.language || "ar";

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Main Button */}

      <button
        onClick={toggleDropdown}
        className="flex gap-2 items-center px-4 py-2 border border-gray-100 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
      >
        {/* Display the flag of the selected language */}
        <span className="text-2xl">{flags[currentLang]} </span>

        {currentLang.toUpperCase()}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className=" flex flex-col  z-50 absolute right-0 mt-2  origin-top-right bg-white border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            onClick={() => {
              changeLanguage("en");
              setIsOpen(false);
            }}
            className="flex justify-center items-center gap-4 hover:bg-green-100 px-4 py-2 cursor-pointer"
          >
            <h1 className="text-2xl">{flags.en}</h1>
            <button>EN</button>
          </div>

          <div
            onClick={() => {
              changeLanguage("fr");
              setIsOpen(false);
            }}
            className="flex justify-center items-center gap-4 hover:bg-green-100 px-4 py-2 cursor-pointer"
          >
            <h1 className="text-2xl">{flags.fr}</h1>
            <button>FR</button>
          </div>

          <div
            onClick={() => {
              changeLanguage("ar");
              setIsOpen(false);
            }}
            className="flex justify-center items-center gap-4 hover:bg-green-100 px-4 py-2 cursor-pointer"
          >
            <h1 className="text-2xl">{flags.ar}</h1>
            <button>AR</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
