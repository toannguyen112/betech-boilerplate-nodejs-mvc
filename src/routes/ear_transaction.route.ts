import { Router } from "express";
import EarTransactionController from "../controllers/ear_transaction.controller";

const route = Router();
route.get("/earn-transactions", EarTransactionController.index);

export default route;
