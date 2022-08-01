// importing the Client
import Client from "../database";

// making a type to be used with the class and exporting it
export type Order = {
  id?: number;
  status: string;
  user_id: string;
};

// making a class to be used in the handler files and to connect to the database
export class AppOrder {
  // index method to return everything
  async index(): Promise<Order[]> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM orders";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`can't do that ${error}`);
    }
  }
  // show method to return a specific order by it's id
  async show(user_id: string): Promise<Order> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM orders WHERE user_id=($1)";
      const result = await conn.query(sql, [user_id]);
      conn.release();
      const order = result.rows[0];
      return order;
    } catch (error) {
      throw new Error(`can't do that ${error}`);
    }
  }
  // create method to create an order
  async create(Order: Order): Promise<Order> {
    try {
      const conn = await Client.connect();
      const sql =
        "INSERT INTO orders (status, user_id) VALUES ($1, $2) RETURNING *";
      const result = await conn.query(sql, [Order.status, Order.user_id]);
      conn.release();
      const order = result.rows[0];
      return order;
    } catch (error) {
      throw new Error(`can't do that ${error}`);
    }
  }
  // addProduct method to add a new product
  async addProduct(
    quantity: number,
    order_id: string,
    product_id: string
  ): Promise<Order> {
    try {
      const conn = await Client.connect();
      const sql =
        "INSERT INTO order_products (quantity, order_id, product_id) VALUES ($1, $2, $3)  RETURNING *";
      const result = await conn.query(sql, [quantity, order_id, product_id]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (error) {
      throw new Error(`can't do that ${error}`);
    }
  }
}
