# Storefront Backend Project

## How to setup and connect to the database

- go to the dist directory
- type in the terminal node server.js
- you must have a database nammed data and testing_data for testing
- once the server is started you are connected to the databse
- to test the database first run (npm run build) then (npm run clear) then (npm run test)
- to use the token provided simply when you create the user you will get a token copy this token to the Authentication tab in postman and make sure you select Bearer Token

## Ports the backend and database are running on

- the server is running on port 4444
- the database is running on port 5432

## Package Installation Instructions

### Dependencies

- install typescript (npm i typescript)
- install body-parser (npm i body_parser)
- install db-migrate (npm i db-migrate)
- install db-migrate-pg (npm i db-migrate-pg)
- install dotenv (npm i dotenv)
- install express (npm i express)
- install pg (npm i pg)
- install supertest (npm i supertest)
- install bcrypt (npm i bcrypt)
- install pepper (npm i pepper)
- install jsonwebtoken (npm i jsonwebtoken)

### Devdependencies

- install jasmine (npm i --save-dev jasmine)
- install express types (npm i --save-dev @types/express)
- install jasmine types (npm i --save-dev @types/jasmine)
- install pg types (npm i --save-dev @types/pg)
- install jsonwebtoken types (npm i --save-dev @types/jsonwebtoken)
- install bcrypt types (npm i --save-dev @types/bcrypt)
- install supertest types (npm i --save-dev @types/supertest)
- install jasmine-spec-reporter (npm i --save-dev jasmine-spec-reporter)
- install jasmine-ts (npm i --save-dev jasmine-ts)
- install ts-node (npm i --save-dev ts-node)
- install tsc-watch (npm i --save-dev tsc-watch)

## enviromet variables

POSTGRES_HOST=localhost
POSTGRES_DB=data
POSTGRES_USER=imac
POSTGRES_PASSWORD=pass123
POSTGRES_TEST_DB=testing_data
POSTGRES_PORT=5432
ENV=unknown
BCRYPT_PASSWORD=your-secret-password
SALT_ROUNDS=10
TOKEN_SECRET=secret-token

## Resources used

### Youtube

- https://youtu.be/rZILP_3OP-A
- https://youtu.be/1cjdlfB11Ss
- https://youtu.be/14zY-u9EBCU
- https://youtu.be/zDup0I2VGmk
- https://youtu.be/rw4KlxKEENQ
