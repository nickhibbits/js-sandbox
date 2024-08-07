import React from "react";
import List from "../List";

function GoalsContainer(store) {
  const { goals, dispatch } = store;

  const handleClick = (e) => {
    const goalInputRef = useRef("");

    e.preventDefault();
    const name = goalInputRef.current.value;
    console.log("new goal", name);
    goalInputRef.current.value = "";

    dispatch(
      addGoalAction({
        id: generateId(),
        name,
        complete: false,
      })
    );
  };
  return (
    <>
      <div>
        <h1>Goals</h1>
        <input type="text" placeholder="Add Goal" ref={goalInputRef} />
        <button onClick={handleClick}>Add Goal</button>
      </div>
      <List items={goals} removeItem={() => dispatch(removeGoalAction)} />
    </>
  );
}

export default GoalsContainer;
