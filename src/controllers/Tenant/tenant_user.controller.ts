const jwt = require("jsonwebtoken");
import { Request, Response } from "express";
import TenantUser from "../../models/tenant_user.model";
import bcrypt from "bcrypt";
import { env } from "process";

interface FoundUser {
    t_usr_usrName: string;
    t_usr_Password: string;
}

export default class TenantUserController {

    async index(req: Request, res: Response) {
        try {
            const tenant_users = await TenantUser.findAll({});
            return res.status(200).json(tenant_users);
        } catch (error) {
            res.status(500);
        }
    }

    async login(req: Request, res: Response) {
        try {
            const foundUser = await TenantUser.findOne({ where: { t_usr_usrName: req.body.username } });
            if (!foundUser) {
                return res.status(500).send("Name of user is not correct");
            }

            const isMatch: boolean = bcrypt.compareSync(req.body.password, foundUser.t_usr_Password);

            if (isMatch) {
                const token: string = jwt.sign({ tenant_user: foundUser }, env.SERVER_JWT_SECRET, { expiresIn: "1h" });

                return res.status(200).json({
                    user: {
                        t_usr_id: foundUser.t_usr_id,
                        t_usr_usrName: foundUser.t_usr_usrName,
                    },
                    token: token,
                });
            } else {
                return res.status(500).send("Password is not correct");
            }
        } catch (error) {
            res.status(500);
        }
    }

    async register(req: Request, res: Response) {
        const { t_usr_usrName, t_usr_Password, t_usr_name, t_usr_Email, t_usr_Phone } = req.body;
        try {
            await TenantUser.create({
                t_schema_id: "SCHalN0DPOohAYDYp1phOwb",
                t_usr_name: t_usr_name,
                t_usr_usrName: t_usr_usrName,
                t_usr_Password: t_usr_Password,
                t_usr_Email: t_usr_Email,
                t_usr_Phone: t_usr_Phone,
            });

            return res.status(200).send("Register successfully");
        } catch (error) {
            res.status(500);
        }
    }

    async logout(req: Request, res: Response) {
        const authHeader = req.headers["authorization"];
        jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
            if (logout) {
                res.send({ msg: "You have been Logged Out" });
            } else {
                res.send({ msg: "Error" });
            }
        });
    }

    async profile(req: Request, res: Response) {
        res.json({ msg: "Profile" });
    }
}
