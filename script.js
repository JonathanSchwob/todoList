var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My Todos: ');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodos: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodos: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleComplete: function(position) {
    this.todos[position].completed = !this.todos[position].completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var flag = false;
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed === true) {
        flag = true;
      }
    }
    if (flag === false) {
      for (var j = 0; j < this.todos.length; j++) {
        this.todos[j].completed = true;
      }
    } else {
      for (var k = 0; k < this.todos.length; k++) {
        this.todos[k].completed = false;
      }
    }
    this.displayTodos();
  }
};

var displayTodosButton = document.getElementById("displayTodosButton");

displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});













