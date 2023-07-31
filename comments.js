// create web server
const express = require('express');
const app = express();
const port = 3000;

// import routes
const comments = require('./routes/comments');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use routes
app.use('/comments', comments);

// start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});