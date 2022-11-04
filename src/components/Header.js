import React from "react";

export default function Header() {
  const [darkTheme, setDarkTheme] = React.useState(true);

  React.useEffect(() => {
    const storageTheme = localStorage.getItem("darkTheme");
    if (storageTheme != null) {
      setDarkTheme(JSON.parse(storageTheme));
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute(
      "theme",
      darkTheme ? "dark" : "light"
    );

    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  function checkTheme(e) {
    const isChecked = e.target.checked;
    setDarkTheme(isChecked);
  }

  return (
    <header>
      <label>dark theme</label>
      <input
        type="checkbox"
        onChange={checkTheme}
        defaultChecked={darkTheme}
      ></input>
    </header>
  );
}
