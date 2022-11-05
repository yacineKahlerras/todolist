import React, { useRef } from "react";
import Task from "./Task";

export default function TaskList(props) {
  const draggedIndex = useRef(null);
  const draggedIntoIndex = useRef(null);

  function reorderList() {
    props.setTasks((prevTasks) => {
      const draggedItem = prevTasks.splice(draggedIndex.current, 1)[0];
      prevTasks.splice(draggedIntoIndex.current, 0, draggedItem);
      draggedIndex.current = null;
      draggedIntoIndex.current = null;
      return [...prevTasks];
    });
  }

  const taskElements = props.tasks.map((t, index) => {
    if (props.filterTab === "active" && t.isDone) return null;
    if (props.filterTab === "completed" && !t.isDone) return null;
    return (
      <Task
        key={t.id}
        {...t}
        checkTask={props.checkTask}
        deleteTask={props.deleteTask}
        onDragStart={() => (draggedIndex.current = index)}
        onDragEnd={reorderList}
        onDragEnter={() => (draggedIntoIndex.current = index)}
        onDragOver={(e) => e.preventDefault()}
      />
    );
  });

  return <div className="tasks-container">{taskElements}</div>;
}
