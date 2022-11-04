import React from "react";

export default function Task(props) {
  return (
    <div
      className="task"
      draggable={true}
      onDragStart={props.onDragStart}
      onDragEnter={props.onDragEnter}
      onDragEnd={props.onDragEnd}
      onDragOver={props.onDragOver}
    >
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
