import { Component, createSignal } from "solid-js";

import styles from "./App.module.css";

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div class={styles.App}>
      <header>
        <button class={styles.Button} onClick={() => setCount(count() + 1)}>
          {count()}
        </button>
      </header>
    </div>
  );
};

export default App;
