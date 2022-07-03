import { Clipboard } from "phosphor-react";

import { ITask } from "../../model/ITask";

import { Task } from "../Task";
import styles from "./styles.module.css";

interface TasksProps {
  tasks: ITask[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export function Tasks({ tasks, onToggle, onDelete }: TasksProps) {
  const tasksCount = tasks.length;
  const tasksCompleted = tasks.reduce((acc, curr) => {
    if (curr.isCompleted) {
      acc += 1;
    }

    return acc;
  }, 0);

  return (
    <section className={styles.tasks}>
      <header className={styles.info}>
        <p>
          Tarefas Criadas <span>{tasksCount}</span>
        </p>
        <p>
          Concluídas <span>{tasksCompleted}</span>
        </p>
      </header>

      {tasksCount === 0 && (
        <div className={styles.empty}>
          <Clipboard />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong> Crie tarefas
            e organize seus itens a fazer
          </p>
        </div>
      )}

      {tasksCount > 0 && (
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              isCompleted={task.isCompleted}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
