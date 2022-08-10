import express from "express";
import { env } from "process";
import compression from "compression";
import fs from "fs";
import bodyParser from "body-parser";

let server = express();
let routes: any[] = [];
let routeFiles: string[] = []

routeFiles = fs.readdirSync(__dirname + "/../routes/").filter((file) => file.endsWith(".js") || file.endsWith(".ts"));
export default class ExpressService {
  static async init() {
    try {

      for (const file of routeFiles) {
        const route = await import(`../routes/${file}`);
        const routeName = Object.keys(route)[0];
        routes.push(route[routeName]);
      }

      server.use(compression());
      server.use(bodyParser.urlencoded({ extended: true }));
      server.use(bodyParser.json());
      server.use(express.json());
      server.use(routes);
      server.listen(env.PORT || 8000);

      console.log("[EXPRESS] Express initialized");
    } catch (error) {
      console.log("[EXPRESS] Error during express service initialization");
      throw error;
    }
  }

}
