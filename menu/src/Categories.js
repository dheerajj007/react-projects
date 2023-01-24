import React, { useState } from "react";
import data from "./data";
import Menu from "./Menu";

const Categories = ({ categories, filterItems }) => {
  console.log(categories);
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
