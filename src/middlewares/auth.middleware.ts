import jwt, { Secret } from 'jsonwebtoken';
import { env } from "process";
import { Request, Response, NextFunction } from 'express';
import TenantUser from '../models/tenant_user.model';

export const SERVER_JWT_SECRET: Secret = env.SERVER_JWT_SECRET;

export const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            res.status(401).send('Not found token');
        }

        const decoded = jwt.verify(token, SERVER_JWT_SECRET);
        const tenant = TenantUser.findOne({ where: { t_usr_id: decoded.tenant_user.t_usr_id } })
        req.tenant_user = tenant;

        next();

    } catch (err) {
        res.status(401).send('Please authenticate');
    }
};