import React from "react";
import "../styles/style.scss";
import Main from "./Main";
import Header from "./Header";

export default function App() {
  return (
    <div className="container">
      <div className="bg-cover"></div>
      <Header />
      <Main />
      <aside>
        <p className="drag-info">Drag and drop to reorder list</p>
      </aside>
    </div>
  );
}
