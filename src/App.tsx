import { Component, createSignal, For } from "solid-js";

import Header from "./components/Header";
import Task from "./components/Task";

import styles from "./App.module.scss";

const App: Component = () => {
  const [tasks, setTasks] = createSignal([
    { id: 1, title: "" },
    { id: 2, title: "" },
  ]);

  return (
    <div class={styles.App}>
      <Header />
      <section>
        <For each={tasks()} fallback={<div>no items</div>}>
          {(item, index) => <Task />}
        </For>
      </section>
    </div>
  );
};

export default App;
