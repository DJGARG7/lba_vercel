const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
// Creating connection pool.
const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
    port: 3306,
});

module.exports = connectionPool;