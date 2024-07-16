import React from "react";

function List(items, removeItem) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <p className="name">{item.name}</p>
            <button className="removeItem" onClick={removeItem}>
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
