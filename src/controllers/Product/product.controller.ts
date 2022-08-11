import { Request, Response } from "express";
import Product from "../../models/product.model";
import ProductCategory from "../../models/product_category.model";
export default class ProductController {
  async index(req: Request, res: Response) {
    try {
      const { t_schema_id } = req.tenant_user;
      const data = await Product.findAll({
        where: { t_prod_schemaID: t_schema_id },
        include: ProductCategory,
      });

      return res.status(200).json({ message: "OK", data });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { t_schema_id } = req.tenant_user;
      const data = await Product.create({
        t_prod_schemaID: t_schema_id,
        ...req.body,
      });

      return res.status(200).json({ message: "OK", data });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update(req: Request, res: Response) { }
  async delete(req: Request, res: Response) { }
}
