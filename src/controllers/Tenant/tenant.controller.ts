import { jwt } from "jsonwebtoken";
import { Request, Response } from "express";
import Tenant from "../../models/tenant.model";
import TenantUser from "../../models/tenant_user.model";
import bcrypt from "bcrypt";
import { env } from "process";
const { faker } = require("@faker-js/faker");
export default class TenantController {
    static async login(req: Request, res: Response) {
        try {
            const foundUser = await TenantUser.findOne({ where: { t_usr_usrName: req.body.username } });
            if (!foundUser) {
                return res.status(500).send("Name of user is not correct");
            }

            const isMatch = bcrypt.compareSync(req.body.password, foundUser.t_usr_Password);

            if (isMatch) {
                const token = jwt.sign({
                    data: "John Doe",
                }, env.SERVER_JWT_SECRET, { expiresIn: '1800s' });


                return res.status(200).json(token);
            } else {
                return res.status(500).send("Password is not correct");
            }
        } catch (error) {
            res.status(500);
        }
    }

    static async register(req: Request, res: Response) {
        const { t_usr_usrName, t_usr_Password, t_usr_name, t_usr_Email, t_usr_Phone } = req.body;

        try {
            await TenantUser.create({
                t_schema_id: "SCHalN0DPOohAYDYp1phOwb",
                t_usr_name: t_usr_name,
                t_usr_usrName: t_usr_usrName,
                t_usr_Password: t_usr_Password,
                t_usr_Email: t_usr_Email,
                t_usr_Phone: t_usr_Phone,
                t_usr_recordOwner: "USR202rLJUUI393mMK",
            });

            return res.status(200).send("register successfully");
        } catch (error) {
            res.status(500);
        }
    }

    static async index(req: Request, res: Response) {
        try {
            const tenants = await Tenant.findAll({});
            return res.status(200).json(tenants);
        } catch (error) {
            res.status(500);
        }
    }

    static async create(req: Request, res: Response) {
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

    static async tenantUsers(req: Request, res: Response) {
        try {
            const tenant_users = await TenantUser.findAll({});
            return res.status(200).json(tenant_users);
        } catch (error) {
            res.status(500);
        }
    }
}
