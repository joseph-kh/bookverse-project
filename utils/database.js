import mysql2 from "mysql2";
import { dbConfig } from "./credentials.js";

const pool = mysql2.createPool(dbConfig).promise();

export default pool;
