import React from "react";
import TodoItem from "./TodoItem";
import { FILTER_TYPES } from "../constants/filterTypes";

const TodoList = ({ todoList, onDelete, onToggleTodo, currentFilter }) => {
  if (todoList.length === 0) {
    let message = "";

    switch (currentFilter) {
      case FILTER_TYPES.all:
        message = "할 일이 없습니다";
        break;
      case FILTER_TYPES.completed:
        message = "완료된 할 일이 없습니다";
        break;
      case FILTER_TYPES.incompleted:
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
