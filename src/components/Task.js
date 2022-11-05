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
      <div
        onClick={() => props.checkTask(props.id)}
        className={`checkbox-circle ${props.isDone && "checked"}`}
      ></div>
      <h2>{props.todoText}</h2>
      <button
        onClick={() => props.deleteTask(props.id)}
        className="delete"
      ></button>
    </div>
  );
}
