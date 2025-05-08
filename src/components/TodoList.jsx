import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, onDelete, onToggleTodo, currentFilter }) => {
  if (todoList.length === 0) {
    let message = "";

    switch (currentFilter) {
      case "전체":
        message = "할 일이 없습니다";
        break;
      case "완료":
        message = "완료된 할 일이 없습니다";
        break;
      case "미완료":
        message = "아직 해야 할 일이 없습니다";
        break;
    }

    return <p className="text-gray-500">{message}</p>;
  }

  return (
    <div>
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
