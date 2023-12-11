require('dotenv').config(); // Load environment variables from .env file

const pg = require("pg");
const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    },
});


const postTodoIntoDb = async (title, description) => {
    await pool.query(`INSERT INTO todos (title, description) VALUES ($1, $2)`, [title, description]);
};

module.exports = { pool, postTodoIntoDb }

