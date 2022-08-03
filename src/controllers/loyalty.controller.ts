import express, { Request, Response } from "express";
import LoyaltyProgram from "../models/loyalty_program.model";
import Tenant from "../models/tenant.model";

export default class LoyaltyController {
    static async index(req: Request, res: Response) {
        try {
            const data = await LoyaltyProgram.findAll({ include: Tenant });

            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }
    }
}
