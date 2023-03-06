const mysql = require('mysql2');
require('dotenv').config();

const sql = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    port: process.env.DB_PORT,
    multipleStatements: true
});

module.exports = sql;