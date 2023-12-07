const express = require('express');
const app = express();
const port = 3000;

const pg = require("pg");
const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "todo",
  password: "lol",
  port: 5432,
});

app.use(express.json()); // Parse JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

postTodoIntoDb = async (title, description) => {
    await pool.query(`INSERT INTO todos (title, description) VALUES ($1, $2)`, [title, description]);
}

app.post('/todo',  (req, res) => {
    console.log(req.body);
    const { title, description } = req.body;
    postTodoIntoDb(title, description);
    res.send('Todo created!');
});

app.get('/todos', async (req, res) => {
    const { rows } = await pool.query(`SELECT * FROM todos`);
    res.send(rows);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
