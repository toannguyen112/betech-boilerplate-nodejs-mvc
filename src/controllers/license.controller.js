import * as Yup from "yup";
import { Errors } from "../utils/errors";
import LicensePermission from "../models/LicensePermission";
import BaseController from "./base.controller";

class LicenseController extends BaseController {
  static async index(req, res) {
    try {
      const data = await License.findAll({});
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  }

  static async licensePermissions(req, res) {
    try {
      const data = await LicensePermission.findAll({});
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  }
}
export default LicenseController;
