import mysql from 'mysql2';
import 'dotenv/config';

const connection = mysql.createConnection({
    host: process.env.DB1_HOST,
    user: process.env.DB1_USER,
    password: process.env.DB1_PASSWORD,
    database: process.env.DB1_DATABASE,
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }

    console.log('Connected to MySQL server');
});

connection.end();