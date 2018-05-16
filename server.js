// server.js

const express = require('express');
const apiRouter = require('./app/routes/api');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRouter);
app.listen(port);
console.log(`Server starter on port ${port}`);

module.exports = app;
