# customers
customers-app

# Run app
- Run with docker: `docker-compose up`
- Check container IP with `docker-machine ip` and open the app in the browser (i.e. `192.168.99.100:3000`)
- Re-run during development when source changed: `docker-compose up -d --no-deps --build customers_app`

# Configuration
Configuration variables are defined by Environment Variables and in .env file. 

App modules should import `config.js` to get configuration values.

# Database

App using MongoDB to manage customer data, please define connection settings in `.env` file

# Deployment and server tests

- run server tests:
`./test.sh`

