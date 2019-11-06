import React from "react";
import "./styles.css";

const ListItem = (props) => {
  return (
    <li className="listItem">
      {props.item[props.labelOption] || props.item['name']}
      {props.item[props.typeOption] ? <span>({props.item[props.typeOption]})</span> : null}
      <div
        onClick={() => {
          props.onRemoveItem(props.item[props.valueOption]);
        }}
      >
        X
      </div>
    </li>
  );
};

export default ListItem;
