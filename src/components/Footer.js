import React from "react";
import { nanoid } from "nanoid";

export default function Footer(props) {
  // making tabs
  const tabsList = ["all", "active", "completed"];
  const tabsContainer = tabsList.map((t) => {
    return (
      <button
        className={props.filterTab === t ? "active-tab" : ""}
        key={nanoid()}
        onClick={() => props.setFilterTab(t)}
      >
        {t}
      </button>
    );
  });

  //   how many tasks are left not done
  const activeTasksCount = props.tasks.reduce((sum, task) => {
    if (!task.isDone) return sum + 1;
    return sum;
  }, 0);

  return (
    <div className="nav-container">
      <p>{activeTasksCount} items left</p>
      <div className="tabs-container">{tabsContainer}</div>
      <button
        className="clear-completed-btn"
        onClick={() => props.clearCompleted()}
      >
        clear completed
      </button>
    </div>
  );
}
