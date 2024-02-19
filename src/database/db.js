import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "invoiceapp",
  connectionLimit: 1000,
});

export default pool;
