import { Component } from "solid-js";

import Header from "./components/Header";

import styles from "./App.module.scss";
import Task from "./components/Task";

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
