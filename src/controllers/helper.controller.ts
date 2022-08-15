import express from "express";
export default class HelperController {
    static getModelData(req, res) {
        return "123";

        let model;
        let items;
        let method;

        if (req.body.const) {
            model = this.modelNamespace(req);
            items = `${items}/${model}`;
        }
        else {
            model = this.modelNamespace(req);
            model = new model;
            method = req.body.method;
        }

        if (req.body.params) {
            items = model.method(req.body.params);
        }
        else {
            items = model.method;
        }

        items = this.onlyFields(req, items);
    }

    static modelNamespace(req: express.Request) {
        const model = req.body.model;
        return `src/models/${model}`;
    }

    static onlyFields(req: express.Request, items) {
        if (req.body.only) {
            return items.only(req.body.only);
        } else if (req.body.method === 'get') {
            return items.only('id', req.body.label, req.body.name);
        }

        return items;
    }
}