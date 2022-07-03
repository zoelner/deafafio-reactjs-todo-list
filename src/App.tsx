import { Header } from "./components/Header";
import { Newtask } from "./components/NewTask";

import styles from "./App.module.css";
import { Tasks } from "./components/Tasks";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <Newtask />
        <Tasks />
      </main>
    </div>
  );
}

export default App;
