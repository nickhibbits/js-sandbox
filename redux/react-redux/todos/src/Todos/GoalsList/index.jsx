import React from "react";

function GoalsList(store) {
  const handleClick = (e) => {
    const goalInputRef = useRef("");

    e.preventDefault();
    const name = goalInputRef.current.value;
    console.log("new goal", name);
    goalInputRef.current.value = "";

    store.dispatch();
  };
  return (
    <div>
      <h1>Goals</h1>
      <input type="text" placeholder="Add Goal" ref={goalInputRef} />
      <button onClick={handleClick}>Add Goal</button>
      <ul id="goals"></ul>
    </div>
  );
}

export default GoalsList;
