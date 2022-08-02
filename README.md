# Storefront Backend Project

## How to setup and connect to the database

- run db-migrate up to create the tables
- go to the dist directory
- type in the terminal node server.js
- ther server will be running on http://localhost:4444

### the token

- to use the token provided simply when you create the user you will get a token copy this token to the Authentication tab in postman and make sure you select Bearer Token

### users

- Create: to create a new user make a post request to http://localhost:4444/users and provide three things (first_name, last_name, password) of the user in the request body. finally, you will reseve a token for future uses.
- Index: to see all the users make a get request to http://localhost:4444/users and you will get all the users data [must provide the token]
- Show: to see a specific user simply make a get request to http://localhost:4444/users/:id in the id insert the spicified user id to return him [mush provide a token]
- Authenticate: to authenticate a user make a post request to http://localhost:4444/authenticate and provide (first_name, last_name, password) of the user in the request body. finally, if the data mathes a user it will be returned

### products

- Create: to create a new product make a post request to http://localhost:4444/products and provide two things (name, price) of the product in the request body [must provide a token]
- Index: to see all products make a get request to http://localhost:4444/products and you will get all the products
- Show: to see a spicific product simply make a get request to http://localhost:4444/products/:id in the id insert the spicified product id to return it

### orders

- Create: to create a new order make a post request to http://localhost:4444/orders and provide two things (status, user_id) of the order in the request body [must provide a token]
- Index: to to see all orders make a get request to http://localhost:4444/orders and you will get all the orders [must provide a token]
- Show: to see a spicific order simply make a get request to http://localhost:4444/orders/:id in the id insert the spicified order id to return it
- addProduct: to add a new product to your orders make a post request to http://localhost:4444/orders/:id/products where the id is the order id and you will provide (quantity, product id) in the request body [must provide a token]

### database

- you must have a database nammed data and testing_data for testing
- once the server is started you are connected to the databse

### testing database

- to test the database first run (npm run build) then (npm run clear) then (npm run test)

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

- POSTGRES_HOST=localhost
- POSTGRES_DB=data
- POSTGRES_USER=imac
- POSTGRES_PASSWORD=pass123
- POSTGRES_TEST_DB=testing_data
- POSTGRES_PORT=5432
- ENV=unknown
- BCRYPT_PASSWORD=your-secret-password
- SALT_ROUNDS=10
- TOKEN_SECRET=secret-token

## Resources used

### Youtube

- https://youtu.be/rZILP_3OP-A
- https://youtu.be/1cjdlfB11Ss
- https://youtu.be/14zY-u9EBCU
- https://youtu.be/zDup0I2VGmk
- https://youtu.be/rw4KlxKEENQ
