import * as Yup from "yup";
import Organization from "../models/Organization";
import { Errors } from "../utils/errors";

export default class OrganizationController {
  static async index(req, res) {
    try {
      const org = await Organization.findAll({});
      return res.status(200).json(org);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  }
}
