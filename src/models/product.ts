// importing the Client
import Client from "../database";

// making a type to be used with the class and exporting it
export type Product = {
  id?: number;
  name: string;
  price: number;
};

// making a class to be used in the handler files and to connect to the database
export class AppProduct {
  // index method to return everything
  async index(): Promise<Product[]> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM products";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`can't do that ${error}`);
    }
  }
  // show method to return a specific product by it's id
  async show(id: string): Promise<Product> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM products WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      const product = result.rows[0];
      return product;
    } catch (error) {
      throw new Error(`can't do that ${error}`);
    }
  }
  // create method to create a product
  async create(Product: Product): Promise<Product> {
    try {
      const conn = await Client.connect();
      const sql =
        "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *";
      const result = await conn.query(sql, [Product.name, Product.price]);
      conn.release();
      const product = result.rows[0];
      return product;
    } catch (error) {
      throw new Error(`can't do that ${error}`);
    }
  }
}
