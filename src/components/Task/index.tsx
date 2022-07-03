import { CheckCircle, Circle, Trash } from "phosphor-react";

import styles from "./styles.module.css";

interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export function Task({
  id,
  title,
  isCompleted,
  onDelete,
  onToggle,
}: TaskProps) {
  function handleCheck() {
    onToggle(id);
  }

  function handleDelete() {
    onDelete(id);
  }

  const className = isCompleted
    ? styles.task.concat(` ${styles.completed}`)
    : styles.task;

  return (
    <li className={className}>
      <button onClick={handleCheck}>
        {isCompleted ? <CheckCircle weight="fill" /> : <Circle />}
      </button>
      <p>{title}</p>
      <button onClick={handleDelete}>
        <Trash />
      </button>
    </li>
  );
}
