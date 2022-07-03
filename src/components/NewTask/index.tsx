import { PlusCircle } from "phosphor-react";
import styles from "./styles.module.css";

export function Newtask() {
  return (
    <div className={styles.newTask}>
      <input name="todo" type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <PlusCircle />
      </button>
    </div>
  );
}
