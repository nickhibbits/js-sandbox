import API from "../utils/api";

export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";

const addGoal = (name) => {
  return {
    type: ADD_GOAL,
    goal: {
      id: null,
      name: name,
      complete: false,
    },
  };
};
const removeGoal = (id) => {
  return {
    type: REMOVE_GOAL,
    id: id,
  };
};

export function handleAddGoal() {}

export function handleDeleteGoald() {}
