import React from "react";
import { nanoid } from "nanoid";
import TaskList from "./TaskList";

export default function Main() {
  const [tasks, setTasks] = React.useState([
    { id: nanoid(), todoText: "complete online js course", isDone: false },
    { id: nanoid(), todoText: "do some fucking push-ups", isDone: true },
    {
      id: nanoid(),
      todoText: "cook some delecious lentils soup",
      isDone: false,
    },
  ]);

  function deleteTask(id) {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id != id));
  }

  function checkTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((t) => ({
        ...t,
        isDone: t.id === id ? !t.isDone : t.isDone,
      }))
    );
  }

  return (
    <main>
      <TaskList tasks={tasks} checkTask={checkTask} deleteTask={deleteTask} />
    </main>
  );
}
