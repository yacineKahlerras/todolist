import React from "react";

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
      <label>dark theme</label>
      <input
        type="checkbox"
        onChange={() => setDarkTheme(!darkTheme)}
        checked={darkTheme}
      ></input>
    </header>
  );
}
