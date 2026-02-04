import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <ul>
      {todos
        .filter((todo) => todo.isComplete == false)
        .map((todo, index) => (
          <li key={index}>
            {todo.data}
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          </li>
        ))}
    </ul>
  );
}

export default TodoList;
