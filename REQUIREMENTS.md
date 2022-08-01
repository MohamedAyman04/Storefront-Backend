# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products
- [OPTIONAL] Products by category (args: product category)

#### Users

- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders

- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes

#### Product

- id
- name
- price
- [OPTIONAL] category

#### User

- id
- firstName
- lastName
- password

#### Orders

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

## Updates

### API Endpoints

#### Products

- the index product code is app.get("/products", index);
- the show product code is app.get("/products/:id", show);
- the create product code is app.post("/products", create);

#### Users

- the index user code is app.get("/users", index);
- the show user code is app.get("/users/:id", show);
- the create user code is app.post("/users", create);
- the Authenticate user code is app.post("/authenticate", Authenticate);

#### Orders

- the current order code is app.get("/orders/:id", show);
- the index order code is app.get("/orders", index);
- the create order code is app.post("/orders", create);
- the addProduct order code is app.post("/orders:/id/products", addProduct)

### Data Shapes

Database name is data

#### Products

- products table has (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  price INT NOT NULL
  )
- and has a drop table

#### Users

- users table has (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  password text NOT NULL
  )
- and has a drop table

#### Orders

- orders table has (
  id SERIAL PRIMARY KEY,
  status VARCHAR(50) NOT NULL,
  user_id BIGINT REFERENCES users(id)
  )
- and has a drop table

#### Order-products

- another table is created for the many-to-many relationship
- order_products table has (
  id SERIAL PRIMARY KEY,
  quantity INT,
  order_id BIGINT REFERENCES orders(id),
  product_id BIGINT REFERENCES products(id)
  )
- and has a drop table
