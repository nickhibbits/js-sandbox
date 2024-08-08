function Todos(props) {
  const todoInputRef = useRef("");

  const { todos, dispatch } = store;

  const handleAdd = (e) => {
    e.preventDefault();
    const name = todoInputRef.current.value;

    dispatch(handleAddTodo(name, () => (todoInputRef.current.value = "")));
  };

  const handleDelete = (todo) => {
    dispatch(handleDeleteTodo(todo));
  };

  const handleToggle = (id) => {
    dispatch(handleToggleTodo(id));
  };

  return (
    <>
      <div>
        <h1>Todos</h1>
        <input type="text" placeholder="Add Todo" ref={todoInputRef} />
        <button onClick={handleAdd}>Add Todo</button>
        <List
          items={todos}
          removeItem={handleDelete}
          toggleItem={handleToggle}
        />
      </div>
    </>
  );
}

export default Todos;
