// server.js

const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');
const apiRouter = require('./app/routes/api');

// DB
const { db: { host, port, name } } = config;
const connectString = `mongodb://${host}:${port}/${name}`;
mongoose.connect(connectString, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', process.env.MONGO_URL);
  }
});

// App
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRouter);
app.listen(config.app.port);
console.log(`Server starter on port ${config.app.port}`);

module.exports = app;
