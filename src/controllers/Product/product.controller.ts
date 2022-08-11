import { Request, Response } from "express";
import Product from "../../models/product.model";
import ProductCategory from "../../models/product_category.model";
export default class ProductController {

  async index(req: Request, res: Response) {
    try {
      const { t_schema_id } = req.tenant_user;

      const data = await Product.findAll({
        where: { t_prod_schemaID: t_schema_id },
        include: ProductCategory
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
        t_prod_name: `Product 1`,
        t_prod_size: "big",
        t_prod_code: "USR202rLJUUI393mMK",
        t_prod_sku: "USR202rLJUUI393mMK",
        t_prod_gender: "USR202rLJUUI393mMK",
        t_prod_color: "USR202rLJUUI393mMK",
        t_prod_ageFrom: 1,
        t_prod_ageTo: 2
      });

      return res.status(200).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update(req: Request, res: Response) { }
  async delete(req: Request, res: Response) { }
}
