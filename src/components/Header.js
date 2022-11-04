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
    console.log(darkTheme);
  }

  return (
    <header>
      <label>dark switch</label>
      <input type="checkbox" onChange={checkTheme}></input>
    </header>
  );
}
