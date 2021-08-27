import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

function App() {
  const toDos = todosData.map(todo => <TodoItem key={todo.id} text={todo.text} completed={todo.completed}/>)

  return (
    <div className="todo-list">
      {toDos}
    </div>
  );
}

export default App;
