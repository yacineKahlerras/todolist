import React, { useContext } from "react";
import { tasksContext } from "./Main";

export default function Task(props) {
  const { isDone, id, todoText } = props;
  const { onDragStart, onDragEnd, onDragEnter, onDragOver } = props;
  const importedTasksContext = useContext(tasksContext);
  return (
    <div
      className={`task ${isDone ? "task-done" : ""}`}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
    >
      <div
        onClick={() => importedTasksContext.checkTask(id)}
        className={`checkbox-circle ${isDone && "checked"}`}
      ></div>
      <h2>{todoText}</h2>
      <button
        onClick={() => importedTasksContext.deleteTask(id)}
        className="delete"
        aria-label="delete task button"
      ></button>
    </div>
  );
}
