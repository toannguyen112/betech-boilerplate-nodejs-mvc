import Product from "../../models/product.model";
import express, { Request, Response } from "express";
import ProductCategory from "../../models/product_category.model";
export default class ProductController {

  async index(req: Request, res: Response) {
    try {
      const products = await Product.findAll({ include: ProductCategory });
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
    }
  }

  async create(req: Request, res: Response) { }

  async update(req: Request, res: Response) { }

  async delete(req: Request, res: Response) { }
}
