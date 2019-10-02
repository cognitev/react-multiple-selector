import React from "react";
import "./styles.css";

const ListItem = ({ name, type, _id, code, parent_id, regions, cities, onRemoveItem }) => {
  return (
    <li className="listItem">
      {name}
      <span>({type})</span>
      <div
        onClick={() => {
          onRemoveItem(_id);
        }}
      >
        X
      </div>
    </li>
  );
};

export default ListItem;
