import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const TodoItem = ({ item, onDelete, onToggleTodo }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 mb-3 bg-indigo-50 text-indigo-800 rounded-md shadow-sm">
      <span
        className={`${
          item.isDone ? "line-through text-indigo-200" : ""
        } transition duration-150`}
      >
        {item.text}
      </span>
      <div className="flex gap-3">
        <input
          type="checkbox"
          className="checkbox checkbox-primary checkbox-sm"
          checked={item.isDone}
          onChange={() => onToggleTodo(item.id)}
        />
        <AiOutlineDelete
          className="shrink-0 cursor-pointer text-indigo-400 hover:text-indigo-600 transition duration-150"
          onClick={() => onDelete(item.id)}
          size={20}
          title="삭제하기"
        />
      </div>
    </div>
  );
};

export default TodoItem;
