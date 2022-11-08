import React, { useContext, useRef } from "react";
import { tasksContext } from "./Main";
import Task from "./Task";

export default function TaskList() {
  const draggedIndex = useRef(null);
  const draggedIntoIndex = useRef(null);
  const importedTasksContext = useContext(tasksContext);

  // places item bellow the dragged into item
  function reorderList() {
    importedTasksContext.setTasks((prevTasks) => {
      const draggedItem = prevTasks.splice(draggedIndex.current, 1)[0];
      prevTasks.splice(draggedIntoIndex.current, 0, draggedItem);
      draggedIndex.current = null;
      draggedIntoIndex.current = null;
      return [...prevTasks];
    });
  }

  const taskElements = importedTasksContext.tasks.map((t, index) => {
    if (importedTasksContext.filterTab === "active" && t.isDone) return null;
    if (importedTasksContext.filterTab === "completed" && !t.isDone)
      return null;

    return (
      <Task
        key={t.id}
        {...t}
        checkTask={importedTasksContext.checkTask}
        deleteTask={importedTasksContext.deleteTask}
        onDragStart={() => (draggedIndex.current = index)}
        onDragEnd={reorderList}
        onDragEnter={() => (draggedIntoIndex.current = index)}
        onDragOver={(e) => e.preventDefault()}
      />
    );
  });

  return <div className="tasks-container">{taskElements}</div>;
}
