import React from "react";
import { API } from "../../utils/api";

function List(items, removeItem, toggleItem) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <p
              className={`name ${item.complete ? "crossthrough" : null}`}
              onClick={() => toggleItem(id)}
            >
              {item.name}
            </p>
            <button className="removeItem" onClick={() => removeItem(item)}>
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
