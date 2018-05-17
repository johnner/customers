// config.js

require('dotenv').config();

const config = {
  app: {
    port: parseInt(process.env.PORT) || 3000
  },
  db: {
    protocol: 'mongodb://',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 27017,
    name: process.env.DB_NAME
  }
};

module.exports = config;
