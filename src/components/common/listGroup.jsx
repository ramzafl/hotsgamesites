import React from "react";
import "../../App.css";

const ListGroup = ({ items, selectedItem, onItemSelect }) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          onClick={() => onItemSelect(item)}
          key={item}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
