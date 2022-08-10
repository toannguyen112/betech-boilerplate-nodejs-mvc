import { Request, Response } from "express";
import Tenant from "../../models/tenant.model";
import HasCrudAction from "../../package/has_crud_action";
import Helper from "../../utils/helpers";

const { faker } = require("@faker-js/faker");
export default class TenantController {
    // constructor() {
    //     Helper.applyMixins(TenantController, [HasCrudAction]);
    // }

    async index(req: Request, res: Response) {
        try {
            const tenants = await Tenant.findAll({});
            return res.status(200).json(tenants);
        } catch (error) {
            res.status(500);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const data = await Tenant.create({
                t_schName: faker.name.findName(),
                t_schStart_date: faker.datatype.datetime(),
                t_schEnd_date: faker.datatype.datetime(),
                t_sch_recordOwner: "USR202rLJUUI393mMK",
                t_sch_lastModified_by: "USR202rLJUUI393mMK",
                t_sch_created_by: "USR202rLJUUI393mMK",
            });

            return res.status(200).json(data);
        } catch (error) {
            res.status(500);
        }
    }
}

