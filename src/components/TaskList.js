import React from "react";
import Task from "./Task";

export default function TaskList(props) {
  //save reference for dragItem and dragOverItem
  const dragItem = React.useRef(null);
  const dragOverItem = React.useRef(null);

  //const handle drag sorting
  const handleSort = () => {
    //duplicate items
    let _fruitItems = [...props.tasks];

    //remove and save the dragged item content
    const draggedItemContent = _fruitItems.splice(dragItem.current, 1)[0];

    //switch the position
    _fruitItems.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    props.setTasks(_fruitItems);
  };

  const taskElements = props.tasks.map((t, index) => {
    if (props.filterTab === "active" && t.isDone) return null;
    if (props.filterTab === "completed" && !t.isDone) return null;
    return (
      <Task
        key={t.id}
        {...t}
        checkTask={props.checkTask}
        deleteTask={props.deleteTask}
        onDragStart={(e) => (dragItem.current = index)}
        onDragEnter={(e) => (dragOverItem.current = index)}
        onDragEnd={handleSort}
        onDragOver={(e) => e.preventDefault()}
      />
    );
  });

  return <div className="tasks-container">{taskElements}</div>;
}
