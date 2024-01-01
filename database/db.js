// db.js
import mysql from 'mysql2';
import 'dotenv/config';

const pool1 = mysql.createPool({
    host: process.env.DB1_HOST,
    user: process.env.DB1_USER,
    password: process.env.DB1_PASSWORD,
    database: process.env.DB1_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

const pool2 = mysql.createPool({
    host: process.env.DB2_HOST,
    user: process.env.DB2_USER,
    password: process.env.DB2_PASSWORD,
    database: process.env.DB2_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export { pool1, pool2 };