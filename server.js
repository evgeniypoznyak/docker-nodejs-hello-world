'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const test = process.env.SECRET || 'this value set from code';
// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n' + test);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);