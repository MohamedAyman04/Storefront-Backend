// importing libraries
import { Pool } from "pg";
import dotenv from "dotenv";

// configuring dotenv
dotenv.config();

// adding the dotenv data
const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_TEST_DB,
  POSTGRES_PORT,
  ENV,
} = process.env;

// defining the Client
let Client = new Pool({
  host: POSTGRES_HOST,
  database: POSTGRES_TEST_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  port: Number(POSTGRES_PORT),
});

// logging the ENV
console.log(ENV);

// checking if the ENV is dev to begin development mode with the database data
if (ENV === "dev") {
  Client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port: Number(POSTGRES_PORT),
  });
  console.log("went dev");
}

// checking if the ENV is test to begin testing mode with the database testing_data
if (ENV === "test") {
  Client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port: Number(POSTGRES_PORT),
  });
  console.log("went test");
}

// exporting Client for the models
export default Client;
