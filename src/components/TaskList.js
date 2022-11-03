import React from "react";
import Task from "./Task";

export default function TaskList(props) {
  const taskElements = props.tasks.map((t) => {
    if (props.filterTab === "active" && t.isDone) return null;
    if (props.filterTab === "completed" && !t.isDone) return null;
    return (
      <Task
        key={t.id}
        {...t}
        checkTask={props.checkTask}
        deleteTask={props.deleteTask}
      />
    );
  });

  return <div className="tasks-container">{taskElements}</div>;
}
