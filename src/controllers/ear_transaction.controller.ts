import express, { Request, Response } from "express";
import EarnTransactionSchema from "../models/mongodb_model/earn_transaction.model";
export default class EarTransactionController {
    static async index(req: Request, res: Response) {
        try {
            const data = await EarnTransactionSchema.create({ title: 'Silence' });
            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }
    }
}
