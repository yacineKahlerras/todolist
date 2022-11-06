import React from "react";
import { nanoid } from "nanoid";
import TaskList from "./TaskList";
import Footer from "./Footer";

export default function Main() {
  const [tasks, setTasks] = React.useState([]);
  const [filterTab, setFilterTab] = React.useState("all");

  // gets data from local storage
  React.useEffect(() => {
    const storageTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storageTasks != null && storageTasks.length > 0) setTasks(storageTasks);
    else
      setTasks([
        {
          id: nanoid(),
          todoText: "Complete online JavaScript course",
          isDone: true,
        },
        { id: nanoid(), todoText: "Jog around the park 3x", isDone: false },
        { id: nanoid(), todoText: "10 minutes meditation", isDone: false },
        { id: nanoid(), todoText: "Reas for 1 hour", isDone: false },
        { id: nanoid(), todoText: "Pick up groceries", isDone: false },
        {
          id: nanoid(),
          todoText: "Complete Todo App on Frontend Mentor",
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
    if (value === "") return;
    event.target.value = "";
    const newTask = {
      id: nanoid(),
      todoText: value,
      isDone: false,
    };
    setTasks([newTask, ...tasks]);
  }

  // deletes completed items from tasks list
  function clearCompleted() {
    setTasks((previousTasks) => {
      return previousTasks.filter((t) => !t.isDone);
    });
    setFilterTab("all");
  }

  return (
    <main>
      <div className="input-container">
        <div className="checkbox-circle"></div>
        <input
          placeholder="create a new todo"
          onKeyPress={createNewTask}
        ></input>
      </div>
      <TaskList
        tasks={tasks}
        checkTask={checkTask}
        deleteTask={deleteTask}
        filterTab={filterTab}
        setTasks={setTasks}
      />
      <Footer
        filterTab={filterTab}
        setFilterTab={setFilterTab}
        clearCompleted={clearCompleted}
        tasks={tasks}
      />
    </main>
  );
}
