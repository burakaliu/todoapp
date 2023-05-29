const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(__dirname + '/public'));

let todos = ['Task 1', 'Task 2', 'Task 3'];

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/todos', (req, res) => {
  // Render a view to display the todo list
  res.render('todos', { todos });
});

app.post('/todos', (req, res) => {
  const newTodo = req.body.todo;
  todos.push(newTodo);
  res.redirect('/todos');
});

app.post('/todos/delete', (req, res) => {
  const todoIndex = req.body.index;
  todos.splice(todoIndex, 1);
  res.redirect('/todos');
});


//start the server and listen for incoming requests:
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
