import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
    };
    setTodoList([...todoList, newTodo]);
  };

  const handleDeleteTodo = (idToDelete) => {
    setTodoList(todoList.filter((todo) => todo.id !== idToDelete));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md p-6 bg-white border border-indigo-200 rounded-2xl shadow-md">
        <h2 className="mb-6 text-2xl text-indigo-600">✔️ 할 일 목록</h2>
        <TodoInput onAddTodo={handleAddTodo} />
        <TodoList todoList={todoList} onDelete={handleDeleteTodo} />
      </div>
    </div>
  );
}

export default App;
