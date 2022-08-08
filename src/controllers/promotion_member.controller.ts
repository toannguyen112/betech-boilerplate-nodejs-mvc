import { Request, Response } from "express";
export default class PromotionMemberController {
    static async index(req: Request, res: Response) {
        return res.status(200).json("index");
    }
}
