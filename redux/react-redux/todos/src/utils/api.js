export const API = {
  fail: () => {
    return Math.floor(Math.random() * (5 - 1)) === 3;
  },

  generateId: () => {
    return Math.random().toString(36).substring(2);
  },

  goals: [
    {
      id: this.generateId(),
      name: "Learn Redux",
    },
    {
      id: this.generateId(),
      name: "Read 50 books this year",
    },
  ],
  todos: [
    {
      id: this.generateId(),
      name: "Walk the dog",
      complete: false,
    },
    {
      id: this.generateId(),
      name: "Wash the car",
      complete: false,
    },
    {
      id: this.generateId(),
      name: "Go to thde gym",
      complete: true,
    },
  ],

  fetchGoals() {
    return new Promise((res, rej) => {
      // setTimeout(() => {
      setTimeout(() => {
        res(this.goals);
      }, 2000);
    });
  },

  fetchTodos() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.todos);
      }, 2000);
    });
  },

  saveTodo: (name) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const todo = {
          id: generateId(),
          name: name,
          complete: false,
        };
        todos = todos.concat([todo]);
        fail() ? rej(todo) : res(todo);
      }, 300);
    });
  },

  saveGoal: (name) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const goal = {
          id: generateId(),
          name: name,
        };
        goals = goals.concat([goal]);
        fail() ? rej(goal) : res(goal);
      }, 300);
    });
  },

  deleteGoal: (id) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        goals = goals.filter((goal) => goal.id !== id);
        fail() ? rej() : res(goals);
      }, 300);
    });
  },

  deleteTodo: (id) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        todos = todos.filter((todo) => todo.id !== id);
        fail() ? rej() : res(todos);
      }, 300);
    });
  },

  saveTodoToggle: (id) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        todos = todos.map((todo) =>
          todo.id !== id
            ? todo
            : Object.assign({}, todo, { complete: !todo.complete })
        );

        fail() ? rej() : res(todos);
      }, 300);
    });
  },
};
