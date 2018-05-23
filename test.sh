#!/bin/bash

# re-build customer app
# docker-compose up -d --no-deps --build customers_app
# run tests
docker-compose -f docker-compose.test.yml up --build --no-deps -d
# display logs
docker logs -f customers_test_1
