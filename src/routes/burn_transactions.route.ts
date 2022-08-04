import { Router } from "express";
import BurnTransactionController from "../controllers/burn_transaction.controller";

const route = Router();
route.get("/burn-transactions", BurnTransactionController.index);

export default route;
