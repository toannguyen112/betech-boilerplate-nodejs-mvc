import { Router } from "express";
import LoyaltyProgramController from "../controllers/Loyalty/loyalty_program.controller";
const route: Router = Router();

route.get("/loyalty-programs", new LoyaltyProgramController().index);
route.post("/loyalty-programs", new LoyaltyProgramController().create);
route.put("/loyalty-programs/update/:id", new LoyaltyProgramController().update);
route.delete("/loyalty-programs/delete/:id", new LoyaltyProgramController().delete);

export default route;
