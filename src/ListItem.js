import React from "react";
import styles from "./styles.module.scss";

const ListItem = ({ name, type, _id, onRemoveItem }) => {
  return (
    <li className={styles.listItem}>
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
