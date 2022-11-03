import React from "react";

export default function Task(props) {
  return (
    <div className="task">
      <button
        className={`checkbox ${props.checked && "checkbox-checked"}`}
        onClick={props.checkTask}
      >
        check
      </button>
      <h2>{props.todoText}</h2>
      <button onClick={props.deleteTask} className="delete"></button>
    </div>
  );
}
