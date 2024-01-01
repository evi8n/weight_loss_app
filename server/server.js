// server.js
import express from 'express';
import { pool1, pool2 } from 'database/db';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});