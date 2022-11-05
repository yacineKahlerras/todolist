import React from "react";

export default function Task(props) {
  return (
    <div
      className="task"
      draggable={true}
      onDragStart={props.onDragStart}
      onDragEnd={props.onDragEnd}
      onDragEnter={props.onDragEnter}
      onDragOver={props.onDragOver}
    >
      <button
        className={`checkbox ${props.isDone && "checkbox-checked"}`}
        onClick={() => props.checkTask(props.id)}
        style={{ background: props.isDone ? "green" : "blue" }}
      >
        check
      </button>
      <input type="checkbox" onChange={() => props.checkTask(props.id)}></input>
      <h2>{props.todoText}</h2>
      <button onClick={() => props.deleteTask(props.id)} className="delete">
        delete
      </button>
    </div>
  );
}
