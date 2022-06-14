import { Component, createSignal } from "solid-js";

import styles from "./styles.module.scss";

const Task: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class={styles.Container}>
      <input class={styles.Title} name="Title" type="text" />
      <button class={styles.Save}>save</button>
      <button class={styles.Remove}>remove</button>
    </div>
  );
};

export default Task;
