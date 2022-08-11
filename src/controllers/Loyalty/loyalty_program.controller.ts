import { Request, Response } from "express";
import LoyaltyProgram from "../../models/loyalty_program.model";
export default class LoyaltyProgramController {
    async index(req: Request, res: Response) {
        try {
            const { t_schema_id } = req.tenant_user;
            const data: LoyaltyProgram[] = await LoyaltyProgram.findAll({ where: { t_schema_id: t_schema_id } });
            return res.status(200).json({
                success: true,
                message: "OK",
                data: data,
            });
        } catch (error) {
            return res.status(500).send(error);
        }

    }

    async create(req: Request, res: Response) { }
    async update(req: Request, res: Response) { }
    async delete(req: Request, res: Response) { }
}
