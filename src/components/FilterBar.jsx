import React from "react";
import { FILTER_TYPES } from "../constants/filterTypes";

const FilterBar = ({ currentFilter, onChangeFilter }) => {
  //FILTER_TYPES 객체의 value 값만 가져오기
  const filters = Object.values(FILTER_TYPES);

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
