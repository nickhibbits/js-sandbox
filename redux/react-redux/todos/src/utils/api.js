const generateId = () => {
  return Math.random().toString(36).substring(2);
};

export const API = {
  fail() {
    return Math.floor(Math.random() * (5 - 1)) === 3;
  },

  goals: [
    {
      id: generateId(),
      name: "Learn Redux",
    },
    {
      id: generateId(),
      name: "Read 50 books this year",
    },
  ],
  todos: [
    {
      id: generateId(),
      name: "Walk the dog",
      complete: false,
    },
    {
      id: generateId(),
      name: "Wash the car",
      complete: false,
    },
    {
      id: generateId(),
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

  saveTodo(name) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const todo = {
          id: this.generateId(),
          name: name,
          complete: false,
        };
        console.log("saveTodo ✅", todo);
        this.todos = this.todos.concat([todo]);
        // this.fail() ? rej(todo) : res(todo);
        res(todo);
      }, 300);
    });
  },

  saveGoal(name) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const goal = {
          id: this.generateId(),
          name: name,
        };
        this.goals = this.goals.concat([goal]);
        this.fail() ? rej(goal) : res(goal);
      }, 300);
    });
  },

  deleteGoal(id) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        goals = goals.filter((goal) => goal.id !== id);
        this.fail() ? rej() : res(goals);
      }, 300);
    });
  },

  deleteTodo(id) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        this.fail() ? rej() : res(this.todos);
      }, 300);
    });
  },

  saveTodoToggle(id) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.todos = this.todos.map((todo) =>
          todo.id !== id
            ? todo
            : Object.assign({}, todo, { complete: !todo.complete })
        );

        this.fail() ? rej() : res(this.todos);
      }, 300);
    });
  },
};
