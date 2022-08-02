import { Router } from "express";
import ProductController from "../controllers/product.controller";

const productRoute = Router();
productRoute.get("/products", ProductController.index);
productRoute.get("/categories", ProductController.categories);

export { productRoute };
