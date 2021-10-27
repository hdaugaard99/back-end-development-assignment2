const chalk = require('chalk');
const express = require('express');
const { nextTick } = require('process');
const path = require('path');

const { fstat } = require('fs');
const app = express();
const port = 8080;


// Route to index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Route to builder.html
app.get('/builder', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/builder.html'));
});


app.post('/', function (req, res) {
    res.send('POST request');
});




app.use(express.static('public'));

// Handles 404 errors
app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Error 404 Page not found</h1>"
    )
});

// Log response to terminal
app.listen(port, () => {
    console.log(chalk.magenta(`App is listening at http://localhost:${port}`));
});

