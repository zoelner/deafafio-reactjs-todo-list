import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./styles.module.css";

export function Task() {
  const [isComplete, setComplete] = useState(false);

  function handleCheck() {
    setComplete((prevState) => !prevState);
  }

  function handleDelete() {}

  const className = isComplete
    ? styles.task.concat(` ${styles.completed}`)
    : styles.task;

  return (
    <li className={className}>
      <button onClick={handleCheck}>
        {isComplete ? <CheckCircle weight="fill" /> : <Circle />}
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni
        delectus dolorum veritatis dolorem inventore, debitis quaerat, nemo
        libero fugit, possimus aliquid? Fugit veritatis facere nisi expedita
        sed. Excepturi, temporibus.
      </p>
      <button onClick={handleDelete}>
        <Trash />
      </button>
    </li>
  );
}
