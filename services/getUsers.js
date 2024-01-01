import userData from '../../data/users.json' assert { type: "json" };

app.get('/data', (req, res) => {
    // Retrieve all users from the database
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
});