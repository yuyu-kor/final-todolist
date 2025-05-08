import React from "react";

const FilterBar = ({ currentFilter, onChangeFilter }) => {
  const filters = ["전체", "완료", "미완료"];

  return (
    <div className="flex gap-2 mb-4">
      {filters.map((filter) => (
        <button
          className={`btn text-sm rounded-full transition-all duration-200 ${
            currentFilter === filter ? "btn-primary" : "btn-outline btn-primary"
          }`}
          key={filter}
          onClick={() => onChangeFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
