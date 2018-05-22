// config.js

require('dotenv').config();
const env = process.env.NODE_ENV; // 'dev' or 'test'

const dev = {
  env: env,
  app: {
    port: parseInt(process.env.PORT) || 3000
  },
  db: {
    protocol: 'mongodb://',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 27017,
    name: process.env.DEV_DB_NAME,
    uri: process.env.MONGODB_URI
  }
};

const test = {
  env: env,
  app: {
    port: parseInt(process.env.PORT) || 3000
  },

  db: {
    protocol: 'mongodb://',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 27017,
    name: process.env.TEST_DB_NAME,
    uri: process.env.MONGODB_URI
  }
};

const config = {
  'dev': dev,
  'test': test
};
module.exports = config[env] || dev;