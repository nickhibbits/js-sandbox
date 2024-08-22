import "@/styles/list.scss";

function List({ items, removeItem, toggleItem }) {
  console.log("items", items);
  return (
    <ul className="ul">
      {items.map((item) => {
        return (
          <li key={item.id}>
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
