import express, { Request, Response } from "express";
import Tenant from "../../models/tenant.model";
import TenantUser from "../../models/tenant_user.model";
export default class TenantController {
    static async index(req: Request, res: Response) {
        try {
            const tenants = await Tenant.findAll({});

            return res.status(200).json(tenants);
        } catch (error) {
            console.log(error);
        }
    }

    static async tenantUsers(req: Request, res: Response) {
        try {
            const tenant_users = await TenantUser.findAll({});

            return res.status(200).json(tenant_users);
        } catch (error) {
            console.log(error);
        }
    }
}
