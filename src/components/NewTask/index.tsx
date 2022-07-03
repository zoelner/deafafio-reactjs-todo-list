import { PlusCircle } from "phosphor-react";
import { ChangeEvent, MouseEvent, MouseEventHandler, useState } from "react";
import styles from "./styles.module.css";

interface NewTaskProps {
  onCreate: (title: string) => void;
}

export function Newtask({ onCreate }: NewTaskProps) {
  const [title, setTitle] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setTitle(e.currentTarget.value);
  }

  function handleCreate() {
    onCreate(title);
    setTitle("");
  }

  return (
    <div className={styles.newTask}>
      <input
        name="todo"
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={title}
        onChange={handleChange}
      />
      <button type="button" onClick={handleCreate}>
        Criar
        <PlusCircle />
      </button>
    </div>
  );
}
