import { Request, Response } from "express";
import LoyaltyProgram from "../../models/loyalty_program.model";
export default class LoyaltyProgramController {
    async index(req: Request, res: Response) {
        try {
            const data = await LoyaltyProgram.findAll();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const data = await LoyaltyProgram.create({});
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const t_loyalProg_id: string = req.params.id
            await LoyaltyProgram.update({}, { where: { t_loyalProg_id: t_loyalProg_id } });
            return res.status(200).json("Update success");
        } catch (error) {
            return res.status(500);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const t_loyalProg_id: string = req.params.id
            await LoyaltyProgram.destroy({ where: { t_loyalProg_id: t_loyalProg_id } });
            return res.status(200).json("Remove success");
        } catch (error) {
            return res.status(500);
        }
    }
}
