import { Router } from "express";
import LoyaltyController from "../controllers/loyalty_program.controller";

const route = Router();
route.get("/loyalty-programs", LoyaltyController.index);

export default route;
