import { Router, Request, Response } from "express";
import HomeController from "../controllers/home.controller";

const route: Router = Router();

route.get("/", new HomeController().index);
route.post("/model-data", (req: Request, res: Response) => {
    getModelData(req, res);
});

async function getModelData(req: Request, res: Response) {
    let model: any;
    model = await modelNamespace(req);
    let items = await onlyFields(req, model);

    return res.json(items);
}

async function modelNamespace(req: Request): Promise<any> {
    const model = req.body.model;
    const modelName = await import(`../models/${model}.model.ts`);
    return modelName.default;
}

async function onlyFields(req: Request, model) {
    let items;
    if (req.body.only) {
        const arrOnly: string[] = Object.values(req.body.only);
        items = await model.findAll({ attributes: arrOnly });
    } else if (req.body.method === "get") {
        items = await model.findAll({});
    }

    return items;
}

export default route;
