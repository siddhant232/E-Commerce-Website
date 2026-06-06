const { Pool } = require("pg");
const dotenv = require("dotenv");
const path = require("path");


dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})


//  TEST CONNECTION
pool.connect()
  .then(client => {
    console.log("✅ PostgreSQL connected successfully!");
    client.release();
  })
  .catch(err => {
    console.error("❌ DB connection failed:", err.message);
  });

module.exports = pool;