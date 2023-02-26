import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <Navbar
        handleThemeSwitch={handleThemeSwitch}
        theme={theme}
        setTheme={setTheme}
      />
      <Home />
      <About />
    </div>
  );
}

export default App;
