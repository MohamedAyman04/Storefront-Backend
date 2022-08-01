// importing libraries
import Client from "../database";
import bcrypt from "bcrypt";
const pepper = require("pepper");

// making a type to be used with the class and exporting it
export type User = {
  id?: number;
  first_name: string;
  last_name: string;
  password: string;
};

// making a class to be used in the handler files and to connect to the database
export class AppUser {
  // index method to return everything
  async index(): Promise<User[]> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM users";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`can't do that ${error}`);
    }
  }
  // show method to return a specific product by it's id
  async show(id: string): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM users WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      const user = result.rows[0];
      return user;
    } catch (error) {
      throw new Error(`can't do that ${error}`);
    }
  }
  // create method to create a product
  async create(User: User): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql =
        "INSERT INTO users (first_name, last_name, password) VALUES ($1, $2, $3) RETURNING *";
      const pass = bcrypt.hashSync(
        User.password + pepper,
        parseInt(process.env.SALT_ROUNDS as unknown as string)
      );
      const result = await conn.query(sql, [
        User.first_name,
        User.last_name,
        pass,
      ]);
      conn.release();
      const user = result.rows[0];
      return user;
    } catch (error) {
      throw new Error(`can't do that ${error}`);
    }
  }
  // authenticate method to authenticate a user and return him
  async authenticate(User: User): Promise<User | null> {
    const conn = await Client.connect();
    const sql =
      "SELECT password FROM users WHERE first_name=($1) AND last_name=($2)";
    const result = await conn.query(sql, [User.first_name, User.last_name]);
    if (result.rows.length) {
      const user = result.rows[0];
      if (bcrypt.compareSync(User.password + pepper, user.password)) {
        user.first_name = User.first_name;
        user.last_name = User.last_name;
        return user;
      }
    }
    return null;
  }
}
