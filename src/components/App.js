import React from "react";
import "../styles/style.scss";
import Main from "./Main";
import Header from "./Header";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}
