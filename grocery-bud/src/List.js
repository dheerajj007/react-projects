import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ item }) => {
  return (
    <article className="grocery-item">
      <p className="title">{item}</p>

      <div>
        <button className="edit-btn">
          <FaEdit />
        </button>
        <button className="delete-btn">
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default List;
