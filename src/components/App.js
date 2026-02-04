import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";
const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, data: "Learn React", isComplete: false },
    { id: 2, data: "Build a React app", isComplete: false },
    { id: 3, data: "Deploy the React app", isComplete: false },
  ]);
  console.group("todos", todos);
  function handleComplete(id) {
    setTodos((prev) =>
      prev.map((todo) => {
        return todo.id == id ? { ...todo, isComplete: true } : todo;
      }),
    );
  }

  return (
    <div>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
