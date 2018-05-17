#!/bin/bash

# run test
docker-compose -f docker-compose.test.yml up --build --no-deps -d
docker logs -f customers_test_1 --tail 4