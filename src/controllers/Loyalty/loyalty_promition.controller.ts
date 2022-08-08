import { Request, Response } from "express";
import LoyaltyPromotion from "../../models/loyalty_promotion.model";
export default class LoyaltyPromotionController {
    async index(req: Request, res: Response) {
        try {
            const data = await LoyaltyPromotion.findAll();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const data = await LoyaltyPromotion.create({});
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const t_loyalProg_id: string = req.params.id
            await LoyaltyPromotion.update({}, { where: { t_loyalProg_id: t_loyalProg_id } });
            return res.status(200).json("Update success");
        } catch (error) {
            return res.status(500);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const t_loyalProg_id: string = req.params.id
            await LoyaltyPromotion.destroy({ where: { t_loyalProg_id: t_loyalProg_id } });
            return res.status(200).json("Remove success");
        } catch (error) {
            return res.status(500);
        }
    }
}
