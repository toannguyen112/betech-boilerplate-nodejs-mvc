require("dotenv").config({ path: "loyalty/.env" });

module.exports = {
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
  },
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
