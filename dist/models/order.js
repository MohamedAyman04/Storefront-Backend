"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppOrder = void 0;
const database_1 = __importDefault(require("../database"));
class AppOrder {
    async index() {
        try {
            const conn = await database_1.default.connect();
            const sql = "SELECT * FROM orders";
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (error) {
            throw new Error(`can't do that ${error}`);
        }
    }
    async show(user_id) {
        try {
            const conn = await database_1.default.connect();
            const sql = "SELECT * FROM orders WHERE user_id=($1)";
            const result = await conn.query(sql, [user_id]);
            conn.release();
            const order = result.rows[0];
            return order;
        }
        catch (error) {
            throw new Error(`can't do that ${error}`);
        }
    }
    async create(Order) {
        try {
            const conn = await database_1.default.connect();
            const sql = "INSERT INTO orders (status, user_id) VALUES ($1, $2) RETURNING *";
            const result = await conn.query(sql, [Order.status, Order.user_id]);
            conn.release();
            const order = result.rows[0];
            return order;
        }
        catch (error) {
            throw new Error(`can't do that ${error}`);
        }
    }
    async addProduct(quantity, order_id, product_id) {
        try {
            const conn = await database_1.default.connect();
            const sql = "INSERT INTO order_products (quantity, order_id, product_id) VALUES ($1, $2, $3)  RETURNING *";
            const result = await conn.query(sql, [quantity, order_id, product_id]);
            const order = result.rows[0];
            conn.release();
            return order;
        }
        catch (error) {
            throw new Error(`can't do that ${error}`);
        }
    }
}
exports.AppOrder = AppOrder;
