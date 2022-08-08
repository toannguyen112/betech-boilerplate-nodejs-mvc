import { Router } from "express";
import { auth } from "../middlewares/auth.middleware";
import ProductController from "../controllers/Products/product.controller";

const route = Router();
route.get("/products", auth, new ProductController().index);

export default route;
