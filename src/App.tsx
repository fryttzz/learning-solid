import { Component } from "solid-js";

import Header from "./components/Header";

import styles from "./App.module.scss";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
    </div>
  );
};

export default App;
