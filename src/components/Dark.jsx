import React, { useState } from "react";
import Light from "./Light";

export default function Dark() {
  const [theme, setTheme] = useState("light");

  // Theme ni almashtiruvchi funksiya
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      {/* Button ota componentda */}
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark modega o'tish" : "Light modega o'tish"}
      </button>

      <Light theme={theme} />
    </div>
  );
}
