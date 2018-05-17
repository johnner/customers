# customers
customers-app

# Run app
- Run with docker: `docker-compose up`
- Check container IP with `docker-machine ip` and open the app in the browser (i.e. `192.168.99.100:3000`)
- Re-run after changes: `docker-compose up -d --no-deps --build app`

# Configuration
Configuration variables are defined by Environment Variables in .env file and set in `config.js` file. 

App modules should import `config.js` to get configuration values.

# Database

App using MongoDB to manage customer data, please define connection settings in `.env` file