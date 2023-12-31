import { config } from 'dotenv';
config(); // Load environment variables from .env file

import { Pool } from 'pg';


const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT), // Ensure it's converted to a number
  ssl: {
    rejectUnauthorized: false,
  },
});



export { pool };
