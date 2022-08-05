import express, { Request, Response, NextFunction } from "express";
import Tenant from "../../models/tenant.model";
import TenantUser from "../../models/tenant_user.model";
const { faker } = require("@faker-js/faker");
export default class TenantController {

    static async login(req: Request, res: Response) {
        res.json(req.body);
    }

    static async register(req: Request, res: Response) {
        // console.log(req.body);
    }

    static async index(req: Request, res: Response) {
        try {
            const tenants = await Tenant.findAll({});
            return res.status(200).json(tenants);
        } catch (error) {
            console.log(error);
        }
    }

    static async create(req: Request, res: Response) {
        try {
            await Tenant.create({
                t_schName: faker.name.findName(),
                t_schStart_date: faker.datatype.datetime(),
                t_schEnd_date: faker.datatype.datetime(),
                t_sch_recordOwner: "USR202rLJUUI393mMK",
                t_sch_lastModified_by: "USR202rLJUUI393mMK",
                t_sch_created_by: "USR202rLJUUI393mMK",
            });

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
