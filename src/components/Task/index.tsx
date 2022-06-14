import { Component, createSignal } from "solid-js";

import styles from "./styles.module.scss";

const Task: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class={styles.Container}>
      <input class={styles.Title} name="Title" type="text" />
      <span class={styles.Save}>save</span>
      <span class={styles.Remove}>remove</span>
    </div>
  );
};

export default Task;
