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
      <input
        type="checkbox"
        onChange={() => props.checkTask(props.id)}
        defaultChecked={props.isDone}
      ></input>
      <h2>{props.todoText}</h2>
      <button onClick={() => props.deleteTask(props.id)} className="delete">
        delete
      </button>
    </div>
  );
}
