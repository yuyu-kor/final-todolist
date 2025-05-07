import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, onDelete }) => {
  return (
    <div>
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
