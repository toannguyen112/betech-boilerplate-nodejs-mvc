import { Request, Response } from "express";
import Voucher from "../models/voucher.model";

export default class VoucherController {
    async index(req: Request, res: Response) {
        try {
            const tenants = await Voucher.findAll({});
            return res.status(200).json(tenants);
        } catch (error) {
            res.status(500);
        }
    }

    async create(req: Request, res: Response) { }
    async update(req: Request, res: Response) { }
    async delete(req: Request, res: Response) { }
}
