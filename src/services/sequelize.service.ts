import { env } from "process";
import { Sequelize } from "sequelize-typescript";
import path from "path";

export default class SequelizeService {
  static async init() {
    try {
      let sequelize = new Sequelize("postgres://paspplauhrexta:e5ed2ad0ee09f07aec84b404facaa65cff4e858a59f5f97c70fc45803bccec06@ec2-3-225-110-188.compute-1.amazonaws.com:5432/d3b69np8olum6o");

      // init sequelize model
      sequelize.addModels([path.resolve(__dirname, `../models/`)]);

      console.log("Database service initialized");
    } catch (error) {
      console.log("Error during database service initialization");
      throw error;
    }
  }
};


