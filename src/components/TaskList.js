import React from "react";
import Task from "./Task";

export default function TaskList(props) {
  const taskElements = props.tasks.map((t) => {
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
