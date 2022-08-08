
import { Request, Response } from "express";
import TenantUser from "../../models/tenant_user.model";
import bcrypt from "bcrypt";

export default class TenantUserController {
    async index(req: Request, res: Response) {
        TenantUser.getListData(req, res);
    }

    async login(req: Request, res: Response) {
        TenantUser.handleLogin(req, res);
    }

    async register(req: Request, res: Response) {
        TenantUser.handleRegister(req, res);
    }

    async logout(req: Request, res: Response) {
        return res.status(200).send("Logout successfully");
    }

    async profile(req: Request, res: Response) {
        try {
            const tenant = req.tenant_user;
            return res.status(200).send(tenant);

        } catch (error) {
            res.status(500);
        }
    }
}
