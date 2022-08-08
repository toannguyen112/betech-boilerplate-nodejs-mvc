import { Router } from "express";
import BurnTransactionController from "../controllers/Transaction/burn_transaction.controller";

const route: Router = Router();
route.get("/burn-transactions", BurnTransactionController.index);

export default route;
