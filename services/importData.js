// importData.js
import fs from 'fs/promises';
import { pool1, pool2 } from '../database/db.js';

async function importData() {
    try {
        // Read the JSON file
        const jsonData = JSON.parse(await fs.readFile('data/users.json', 'utf8'));

        // Choose the pool you want to use (pool1 or pool2)
        const pool = pool1;

        // Insert data into the MySQL table using the chosen pool
        const connection = await pool.getConnection();
        await connection.query('INSERT INTO users (username, email) VALUES ?', [jsonData.map(user => [user.username, user.email])]);
        connection.release();

        console.log('Data imported successfully.');
    } catch (error) {
        console.error('Error importing data:', error.message);
        console.error('Stack trace:', error.stack);
    }
}

// Run the importData function
importData();