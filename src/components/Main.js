import React from "react";
import { nanoid } from "nanoid";
import TaskList from "./TaskList";

export default function Main() {
  const [tasks, setTasks] = React.useState([]);

  // gets data from local storage
  React.useEffect(() => {
    const storageTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(storageTasks);
    if (storageTasks.length > 0) setTasks(storageTasks);
    else
      setTasks([
        { id: nanoid(), todoText: "complete online js course", isDone: false },
        { id: nanoid(), todoText: "do some fucking push-ups", isDone: true },
        {
          id: nanoid(),
          todoText: "cook some delecious lentils soup",
          isDone: false,
        },
      ]);
  }, []);

  // update local storage everytime a value change
  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // delete a task from list
  function deleteTask(id) {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  }

  // gets task from array and reverses its "isDone" boolean
  function checkTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((t) => ({
        ...t,
        isDone: t.id === id ? !t.isDone : t.isDone,
      }))
    );
  }

  // adds new task to first position of tasks array
  function createNewTask(event) {
    if (event.key !== "Enter") return;
    const value = event.target.value.trim();
    event.target.value = "";
    const newTask = {
      id: nanoid(),
      todoText: value,
      isDone: false,
    };
    setTasks([newTask, ...tasks]);
  }

  return (
    <main>
      <input placeholder="create a new todo" onKeyPress={createNewTask}></input>
      <TaskList tasks={tasks} checkTask={checkTask} deleteTask={deleteTask} />
    </main>
  );
}