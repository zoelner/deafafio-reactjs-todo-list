import { useState } from "react";
import { v4 as uuid } from "uuid";

import { Header } from "./components/Header";
import { Newtask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";

import type { ITask } from "./model/ITask";

import styles from "./App.module.css";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function createTask(title: string) {
    setTasks((prevState) => [
      ...prevState,
      {
        id: uuid(),
        title,
        isCompleted: false,
      },
    ]);
  }

  function deleteTask(id: string) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  function toggleTask(id: string) {
    const currentTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });

    setTasks(currentTasks);
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <Newtask onCreate={createTask} />
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      </main>
    </div>
  );
}

export default App;
