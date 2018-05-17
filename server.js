// server.js

let express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');
const apiRouter = require('./app/routes/api');

// DB
const { db: { host, port, name } } = config;
const connectString = `mongodb://${host}:${port}/${name}`;
// db options
let options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
};

mongoose.connect(connectString, options, function (err, db) {
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

// don't show the log when it is test
if(config.env !== 'test') {
  // use morgan to log at command line
  app.use(morgan('combined'));
}

console.log(`Server starter on port ${config.app.port}`);

module.exports = app;
