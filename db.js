
require('dotenv').config();
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "6281852bejs",
  host: "localhost",
  port: 5432,
  database: "web_labs_db"
});
module.exports = pool;