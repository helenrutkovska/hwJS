//Task 1
function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => printTodos(data))
      .catch(error => console.log('Error:', error));
  }

  getTodos();
  
  function printTodos(todos) {
    todos.forEach(todo => {
      console.log(`ID: ${todo.id}, Title: ${todo.title}`);
    });
  };

//Task 2
function launchAll(launchMissile) {
    for (var i = 0; i < 5; i++) {
      (function (index) {
        setTimeout(function () {
          launchMissile(index);
        }, index * 1000);
      })(i);
    }
  }
  