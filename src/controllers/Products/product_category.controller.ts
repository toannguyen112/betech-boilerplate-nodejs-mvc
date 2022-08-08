import ProductCategory from "../../models/product_category.model";
import { Request, Response } from "express";
export default class ProductCategoryController {
  async index(req: Request, res: Response) {
    try {
      const products = await ProductCategory.findAll({ include: ProductCategory });
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const products = await ProductCategory.create();
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
    }
  }

  async update(req: Request, res: Response) { }

  async delete(req: Request, res: Response) { }
}
