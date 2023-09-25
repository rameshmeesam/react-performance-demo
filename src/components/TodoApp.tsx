import React, { useState } from "react";
import Todo from "./Todo";

const TodoApp = () => {
  console.log("TodoApp component rendered");
  const [todo, setTodo] = useState([
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" }
  ]);
  const [text, setText] = useState("");

  const addTodo = () => {
    let newTodo = { id: 3, title: text };
    setTodo([...todo, newTodo]);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="button" onClick={addTodo}>
        Add todo
      </button>
      <Todo list={todo} />
    </div>
  );
};

export default TodoApp;
