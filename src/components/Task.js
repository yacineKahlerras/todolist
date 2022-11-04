import React from "react";

export default function Task(props) {
  return (
    <div className="task" draggable={true}>
      <button
        className={`checkbox ${props.isDone && "checkbox-checked"}`}
        onClick={() => props.checkTask(props.id)}
        style={{ background: props.isDone ? "green" : "blue" }}
      >
        check
      </button>
      <h2>{props.todoText}</h2>
      <button onClick={() => props.deleteTask(props.id)} className="delete">
        delete
      </button>
    </div>
  );
}
