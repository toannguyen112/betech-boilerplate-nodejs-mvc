import TenantUser from "../../models/TenantUser";

export default class TenantUserController {
  static async index(req, res) {
    const data = await TenantUser.findAll({});
    return res.status(200).json(data);
  }
}
