import { Request, Response } from "express";
import Product from "../../models/product.model";
import ProductCategory from "../../models/product_category.model";
export default class ProductCategoryController {
  async index(req: Request, res: Response) {
    try {
      const { t_schema_id } = req.tenant_user;

      const data = await ProductCategory.findAll({
        where: { t_prod_schemaID: t_schema_id },
        include: [Product]
      });
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const products = await ProductCategory.create(req.body);
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
    }
  }

  async update(req: Request, res: Response) { }

  async delete(req: Request, res: Response) { }
}
