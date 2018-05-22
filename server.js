// server.js

let express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config');
const apiRouter = require('./app/routes/api');
let app;

// DB
const { db: { host, port, name, uri } } = config;
const connectString = uri || `mongodb://${host}:${port}/${name}`;
// db options
let options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
};

mongoose.connect(connectString, options, function (err, db) {
  if (err) {
    morgan('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', process.env.MONGO_URL);
    // start the app only if mongo connection was successful
    startApp();
  }
}).catch(err => {
  morgan('Unable to connect to the mongoDB server. Error:', err);
});

function startApp() {
  app = express();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, 'client/dist')));
  app.use('/api', apiRouter);
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));

  });
  app.listen(config.app.port);

// don't show the log when it is test
  if(config.env !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined'));
  }
  console.log(`Server starter on port ${config.app.port}`);
}


module.exports = app;
