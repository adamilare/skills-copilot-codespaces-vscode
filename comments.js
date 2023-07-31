// create simple web server with express
// 1. npm init -y
// 2. npm install express
// 3. create comments.js file
// 4. node comments.js
// 5. go to http://localhost:3000
const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'));
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// 6. add new route /comments
app.get('/comments', (req, res) => {
    res.send('This is a comments route!');
});