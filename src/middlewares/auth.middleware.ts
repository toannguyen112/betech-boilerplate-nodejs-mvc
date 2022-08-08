import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { env } from "process";

export const SERVER_JWT_SECRET: Secret = env.SERVER_JWT_SECRET;

export interface TenantRequest extends Request {
    token: string | JwtPayload;
}

export const auth = (req: Request, res: Response, next: NextFunction) => {

    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            res.status(401).send('Not found token');
        }

        const decoded = jwt.verify(token, SERVER_JWT_SECRET);
        (req as TenantRequest).token = decoded;

        next();
    } catch (err) {
        res.status(401).send('Please authenticate');
    }
};