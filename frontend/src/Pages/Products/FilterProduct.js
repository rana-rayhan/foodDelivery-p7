import React from "react";
import { CiForkAndKnife } from "react-icons/ci";

const FilterProduct = ({ category, isActive, onClick }) => {
  const handleClick = () => {
    onClick(category);
  };

  return (
    <div onClick={onClick}>
      <div
        onClick={handleClick}
        className={
          isActive
            ? "text-3xl bg-red-500 rounded-full p-5 cursor-pointer"
            : "text-3xl bg-yellow-500 rounded-full p-5 cursor-pointer"
        }
      >
        <CiForkAndKnife />
      </div>
      <p className="text-center font-medium my-1 capitalize">{category}</p>
    </div>
  );
};

export default FilterProduct;
