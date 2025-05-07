import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const TodoItem = ({ item, onDelete }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 mb-3 bg-indigo-50 text-indigo-800 rounded-md shadow-sm">
      <span>{item.text}</span>
      <AiOutlineDelete
        className="shrink-0 cursor-pointer text-indigo-400 hover:text-indigo-600 transition duration-150"
        onClick={() => onDelete(item.id)}
        size={20}
        title="삭제하기"
      />
    </div>
  );
};

export default TodoItem;
