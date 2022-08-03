import { Router } from "express";
import HomeController from "../controllers/home.controller";

const route = Router();
route.get("/", HomeController.index);

export default route;
