import { env } from "process";
import { Sequelize } from "sequelize-typescript";
import path from "path";

export default class SequelizeService {
  static async init() {
    try {
      let sequelize = new Sequelize({
        dialect: "postgres",
        host: env.DATABASE_URL,
        username: env.DB_USER,
        password: env.DB_PASS,
        database: env.DB_NAME,
        define: {
          timestamps: true,
        },
      });

      // init sequelize model
      sequelize.addModels([path.resolve(__dirname, `../models/`)]);

      console.log("Database service initialized");
    } catch (error) {
      console.log("Error during database service initialization");
      throw error;
    }
  }
};


