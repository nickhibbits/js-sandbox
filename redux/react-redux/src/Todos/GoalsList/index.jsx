import React from "react";

function GoalsList() {
  return (
    <div class="todos">
      <h1>Goals</h1>
      <input type="text" id="goalInput" placeholder="Add Goal" />
      <button>Add Goal</button>
      <ul id="goals"></ul>
    </div>
  );
}

export default GoalsList;
