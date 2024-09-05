import { useState } from 'react';
import { FaLanguage } from 'react-icons/fa';

const LanguageSwitcher = ({ changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div className="relative inline-block text-left">
      {/* Main Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <FaLanguage className="mr-2" />
        Language
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <button
              onClick={() => {
                changeLanguage("en");
                setIsOpen(false);
              }}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              English
            </button>
            <button
              onClick={() => {
                changeLanguage("fr");
                setIsOpen(false);
              }}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Français
            </button>
            <button
              onClick={() => {
                changeLanguage("ar");
                setIsOpen(false);
              }}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              العربية
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
