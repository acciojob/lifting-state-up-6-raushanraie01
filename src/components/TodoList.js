import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.data}
          {!todo.isComplete && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
