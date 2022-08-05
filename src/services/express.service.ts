import express from "express";
import fs from "fs";
import bodyParser from "body-parser";

let server;
let routes: any[] = [];
const routeFiles = fs.readdirSync(__dirname + "/../routes/").filter((file) => file.endsWith(".ts"));
export default class ExpressService {
  static async init() {
    try {
      server = express();
      for (const file of routeFiles) {
        const route = await import(`../routes/${file}`);
        const routeName = Object.keys(route)[0];
        routes.push(route[routeName]);
      }

      server.use(bodyParser.urlencoded({ extended: true }))
      server.use(bodyParser.json());
      server.use(express.json());

      server.use(routes);

      server.listen(process.env.SERVER_PORT);

      console.log("[EXPRESS] Express initialized");
    } catch (error) {
      console.log("[EXPRESS] Error during express service initialization");
      throw error;
    }
  }
}
