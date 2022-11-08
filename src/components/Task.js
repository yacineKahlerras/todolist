import React, { useContext } from "react";
import { tasksContext } from "./Main";

export default function Task(props) {
  const { isDone, id, todoText } = props;
  const dragOptions = {
    onDragStart: props.onDragStart,
    onDragEnd: props.onDragEnd,
    onDragEnter: props.onDragEnter,
    onDragOver: props.onDragOver,
  };
  const importedTasksContext = useContext(tasksContext);

  // checkbox
  const checkBox = (
    <div
      onClick={() => importedTasksContext.checkTask(id)}
      className={`checkbox-circle ${isDone && "checked"}`}
    ></div>
  );

  // delete task btn
  const deleteBtn = (
    <button
      onClick={() => importedTasksContext.deleteTask(id)}
      className="delete"
      aria-label="delete task button"
    ></button>
  );

  return (
    <div
      className={`task ${isDone ? "task-done" : ""}`}
      draggable={true}
      {...dragOptions}
    >
      {checkBox}
      <h2>{todoText}</h2>
      {deleteBtn}
    </div>
  );
}
