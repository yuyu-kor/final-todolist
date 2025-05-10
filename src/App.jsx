import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
import { FILTER_TYPES } from "./constants/filterTypes";

function App() {
  const [filter, setFilter] = useState("전체");
  const [todoList, setTodoList] = useState([]);
  const [initialized, setInitialized] = useState(false);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      isDone: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const handleDeleteTodo = (idToDelete) => {
    setTodoList(todoList.filter((todo) => todo.id !== idToDelete));
  };

  const handleToggleTodo = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const filteredList = todoList.filter((todo) => {
    if (filter === FILTER_TYPES.all) return true;
    if (filter === FILTER_TYPES.completed) return todo.isDone === true;
    if (filter === FILTER_TYPES.incompleted) return todo.isDone === false;
  });

  //로컬스토리지 불러오기
  useEffect(() => {
    const saved = localStorage.getItem("todoList");
    if (saved) {
      setTodoList(JSON.parse(saved));
    }
    setInitialized(true); // 로딩 완료 표시
  }, []);

  //todoList 바뀔 때마다 로컬스토리지에 저장
  useEffect(() => {
    if (initialized) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList, initialized]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md p-6 bg-white border border-indigo-200 rounded-2xl shadow-md">
        <h2 className="mb-6 text-2xl text-indigo-600">✔️ 할 일 목록</h2>
        <TodoInput onAddTodo={handleAddTodo} />
        <FilterBar currentFilter={filter} onChangeFilter={setFilter} />
        <TodoList
          todoList={filteredList}
          onDelete={handleDeleteTodo}
          onToggleTodo={handleToggleTodo}
          currentFilter={filter}
        />
      </div>
    </div>
  );
}

export default App;
