import React from "react";

export default function Header() {
  const [darkTheme, setDarkTheme] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.setAttribute(
      "theme",
      darkTheme ? "dark" : "light"
    );
  }, [darkTheme]);

  function checkTheme(e) {
    const isChecked = e.target.checked;
    setDarkTheme(isChecked);
  }

  return (
    <header>
      <label>dark theme</label>
      <input type="checkbox" onChange={checkTheme}></input>
    </header>
  );
}
