import * as Yup from "yup";
import Product from "../models/Product";
import ProductCategory from "../models/ProductCategory";
import { Errors } from "../utils/errors";
import BaseController from "./base.controller";

export default class ProductController extends BaseController {
  static async index(req, res) {
    try {
      const products = await Product.list();

      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  }

  static async categories(req, res) {
    try {
      const categories = await ProductCategory.list();

      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }
  async create(req, res) {
    console.log(req);
  }
  async edit(req, res) {}
  async delete(req, res) {}
}
