import { Router } from "express";
import ProductController from "../controllers/Products/product.controller";

const route = Router();
route.get("/products", ProductController.index);

export default route;
