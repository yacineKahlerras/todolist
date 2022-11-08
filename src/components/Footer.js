import React, { useContext } from "react";
import { nanoid } from "nanoid";
import { tasksContext } from "./Main";

export default function Footer() {
  const importedTasksContext = useContext(tasksContext);
  // making tabs
  const tabsList = ["all", "active", "completed"];
  const tabsContainer = tabsList.map((t) => {
    return (
      <button
        className={importedTasksContext.filterTab === t ? "active-tab" : ""}
        key={nanoid()}
        onClick={() => importedTasksContext.setFilterTab(t)}
      >
        {t}
      </button>
    );
  });

  //   how many tasks are left not done
  const activeTasksCount = importedTasksContext.tasks.reduce((sum, task) => {
    if (!task.isDone) return sum + 1;
    return sum;
  }, 0);

  return (
    <div className="nav-container">
      <p>{activeTasksCount} items left</p>
      <div className="tabs-container">{tabsContainer}</div>
      <button
        className="clear-completed-btn"
        onClick={() => importedTasksContext.clearCompleted()}
      >
        clear completed
      </button>
    </div>
  );
}
