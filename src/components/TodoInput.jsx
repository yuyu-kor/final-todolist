import React, { useState } from "react";

const TodoInput = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    //공백만 입력했을 때도 입력창 초기화
    const trimmed = inputValue.trim();
    if (trimmed === "") {
      setInputValue("");
      return;
    }
    onAddTodo(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="flex items-center gap-3 mb-6">
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        className="flex-1 w-full px-4 py-2 border border-indigo-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition text-indigo-800 placeholder:text-indigo-300"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleAddTodo}
        className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow hover:bg-indigo-600 transition font-semibold"
      >
        추가
      </button>
    </div>
  );
};

export default TodoInput;
