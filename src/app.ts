import dotenv from "dotenv";
import { env } from "process";
import expressService from "./services/express.service";
import sequelizeService from "./services/sequelize.service";
dotenv.config();

const services = [expressService, sequelizeService];

(async () => {
  try {
    for (const service of services) {
      await service.init();
    }

    console.log(`Server initialized localhost:${env.SERVER_PORT}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
