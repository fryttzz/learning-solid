import { Component, createEffect, createSignal } from "solid-js";

import "../Header/styles.scss";

const Header: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <header class="container">
      <h1>Tasks</h1>
      <button class="TestButton" onclick={() => alert("teste")}>
        Add Task
      </button>
    </header>
  );
};

export default Header;
