import { Clipboard } from "phosphor-react";
import { Task } from "../Task";
import styles from "./styles.module.css";

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <header className={styles.info}>
        <p>
          Tarefas Criadas <span>0</span>
        </p>
        <p>
          Concluídas <span>0</span>
        </p>
      </header>

      <div className={styles.empty}>
        <Clipboard />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong> Crie tarefas e
          organize seus itens a fazer
        </p>
      </div>

      <ul className={styles.taskList}>
        <Task />
      </ul>
    </section>
  );
}
