import React from "react";
import { useReducer } from "react/cjs/react.development";
import { todoReducer } from "./todoReducer";
import "./styles.css";

const initialState = {
  id: new Date().getTime(),
  desc: "Aprender React",
  done: false,
};

export const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);

  return (
    <div>
      <h1>TodoApp</h1>
      <hr />

      <ul>
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
      </ul>
    </div>
  );
};
