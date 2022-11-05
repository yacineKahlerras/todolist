import React from "react";
import sunIcon from "../images/icon-sun.svg";
import moonIcon from "../images/icon-moon.svg";

export default function Header() {
  const [darkTheme, setDarkTheme] = React.useState(true);

  // gets saved dark/light theme
  React.useEffect(() => {
    const storageTheme = localStorage.getItem("darkTheme");
    if (storageTheme != null) {
      setDarkTheme(JSON.parse(storageTheme));
    }
  }, []);

  // sets the :root attribute to dark/light theme and stores value
  React.useEffect(() => {
    document.documentElement.setAttribute(
      "theme",
      darkTheme ? "dark" : "light"
    );

    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <header>
      <h1>todo</h1>
      <div
        className={`theme-switch ${darkTheme ? "dark" : "light"}`}
        onClick={() => setDarkTheme(!darkTheme)}
      >
        <img src={sunIcon} alt="light theme icon" />
        <img src={moonIcon} alt="dark theme icon" />
      </div>
    </header>
  );
}
