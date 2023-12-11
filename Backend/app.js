require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const {pool} = require('./src/db/db') ;
const todoController = require('./src/controllers/todoController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

pool.connect((err) => {
    if (err) {
      console.error('Unable to connect to the database:', err);
    } else {
      console.log('Connected to the database');
    }
  });
  

app.post('/todo', todoController.createTodo);
app.get('/todos', todoController.getTodos);
app.get('/users', todoController.getUser);
app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
