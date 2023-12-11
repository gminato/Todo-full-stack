

const postTodoIntoDb = require('../db/db').postTodoIntoDb;
const pool = require('../db/db').pool;

exports.createTodo = (req, res) => {
    console.log(req.body);
    const { title, description } = req.body;
    postTodoIntoDb(title, description);
    res.send('Todo created!');
};

exports.getTodos = async (req, res) => {
    try {
        const { rows } = await pool?.query(`SELECT * FROM todos`);
        res.send(rows);
    } catch (error) { 
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.getUser = async (req, res) => {
    try {
        const { rows } = await pool?.query(`SELECT * FROM users`);
        console.log(rows);
        res.send(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
