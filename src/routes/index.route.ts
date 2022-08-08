import { Router } from "express";
import HomeController from "../controllers/home.controller";

const route: Router = Router();
route.get("/", HomeController.index);

export default route;
