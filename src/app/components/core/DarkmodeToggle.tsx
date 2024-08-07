import { useState } from "react";
import { LightIcon, MoonIcon } from "../icons";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  };

  return (
    <button onClick={toggleDarkMode} className="p-2  rounded">
      {isDarkMode ? (
        <div className="min-h-5 h-5 min-w-5 w-5 ">
          <MoonIcon />
        </div>
      ) : (
        <div className="min-h-5 h-5 min-w-5 w-5">
          <LightIcon />
        </div>
      )}
    </button>
  );
};

export default DarkModeToggle;
