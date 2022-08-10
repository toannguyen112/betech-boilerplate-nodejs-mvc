require("dotenv").config();

const host = process.env.DB_HOST
const username = process.env.DB_USER
const password = process.env.DB_PASSWORD
const database = process.env.DB_NAME

module.exports = {
  dialect: "postgres",
  host,
  username,
  password,
  database,
  define: {
    timestamps: true,
  },
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
