import express, { Request, Response } from "express";
import Tenant from "../../models/tenant.model";

export default class TenantController {
    static async index(req: Request, res: Response) {
        try {
            const tenants = await Tenant.findAll({});

            return res.status(200).json(tenants);
        } catch (error) {
            console.log(error);
        }
    }
}
