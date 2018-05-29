#!/bin/bash

HEROKU_APP_NAME=$1
HEROKU_TOKEN=$(heroku auth:token)
docker login --username=_ --password=$HEROKU_TOKEN registry.heroku.com
docker build -t registry.heroku.com/$HEROKU_APP_NAME/web .
