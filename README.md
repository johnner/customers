# Customers Management App

Simple web application built with: Docker, MongoDB, Nodejs, Express, Angular 6

App allows basic CRUD operations with customer entities.

Demo : https://customers-management-app.herokuapp.com

## Project structure:
Nodejs Express server configured at the project root (`server.js` and `app` directory).
`app` directory contains server-related models and routes.

Client-side is initialized in the `client` directory. It's Angular 6 application written with Typescript, LESS and Material Design (https://material.angular.io)

## Run app locally
- Run with docker: `docker-compose up`
- Check container IP with `docker-machine ip` and open the app in the browser (i.e. `192.168.99.100:3000`)
- Re-run during development when source changed: `docker-compose up -d --no-deps --build customers_app`

#### Alternative:
- install node dependencies `npm i`
- run mongo in container `docker-compose up -d --build mongo`, set up container's host:port in `.env` (i.e. `192.168.99.100:27017`)
- run app locally: `npm run dev`
- open browser at `localhost:3000/`

## Configuration
Configuration variables are defined by Environment Variables and in .env file. 

App modules should import `config.js` to get configuration values.

## Database

App is using MongoDB to manage customer data. 
DB connection settings should be defined either in `.env` file or by environment variables.

## Tests

- Script to run server tests: `./test.sh`
- To run SPA unit tests: `cd client && ng test`

## Deployment (with heroku)
- Update DB settings: just make sure to set MONGODB_URI environment variable in production environment.
- Run deployment script with Heroku app name argument: `./deploy.sh customers-management-app` 
