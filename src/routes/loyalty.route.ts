import { Router } from "express";
import LoyaltyController from "../controllers/loyalty.controller";

const route = Router();
route.get("/loyalty-programs", LoyaltyController.index);

export default route;
