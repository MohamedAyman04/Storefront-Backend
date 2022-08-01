"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUser = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const pepper = require("pepper");
class AppUser {
    async index() {
        try {
            const conn = await database_1.default.connect();
            const sql = "SELECT * FROM users";
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (error) {
            throw new Error(`can't do that ${error}`);
        }
    }
    async show(id) {
        try {
            const conn = await database_1.default.connect();
            const sql = "SELECT * FROM users WHERE id=($1)";
            const result = await conn.query(sql, [id]);
            conn.release();
            const user = result.rows[0];
            return user;
        }
        catch (error) {
            throw new Error(`can't do that ${error}`);
        }
    }
    async create(User) {
        try {
            const conn = await database_1.default.connect();
            const sql = "INSERT INTO users (first_name, last_name, password) VALUES ($1, $2, $3) RETURNING *";
            const pass = bcrypt_1.default.hashSync(User.password + pepper, parseInt(process.env.SALT_ROUNDS));
            const result = await conn.query(sql, [
                User.first_name,
                User.last_name,
                pass,
            ]);
            conn.release();
            const user = result.rows[0];
            return user;
        }
        catch (error) {
            throw new Error(`can't do that ${error}`);
        }
    }
    async authenticate(User) {
        const conn = await database_1.default.connect();
        const sql = "SELECT password FROM users WHERE first_name=($1) AND last_name=($2)";
        const result = await conn.query(sql, [User.first_name, User.last_name]);
        if (result.rows.length) {
            const user = result.rows[0];
            if (bcrypt_1.default.compareSync(User.password + pepper, user.password)) {
                user.first_name = User.first_name;
                user.last_name = User.last_name;
                return user;
            }
        }
        return null;
    }
}
exports.AppUser = AppUser;
