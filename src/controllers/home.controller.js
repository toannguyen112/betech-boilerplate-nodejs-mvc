import * as Yup from "yup";
import { Errors } from "../utils/errors";
import BaseController from "./base.controller";

class HomeController extends BaseController {
  static async index(req, res) {
    try {
      return res.status(200).json("home page");
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  }
}
export default HomeController;
