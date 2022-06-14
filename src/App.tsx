import { Component } from "solid-js";

import Header from "./components/Header";
import Task from "./components/Task";

import styles from "./App.module.scss";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
      <section>
        <Task />
      </section>
    </div>
  );
};

export default App;
