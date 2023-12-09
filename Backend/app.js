require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();
const port = 3000;

const todoController = require('./src/controllers/todoController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/todo', todoController.createTodo);
app.get('/todos', todoController.getTodos);
app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
