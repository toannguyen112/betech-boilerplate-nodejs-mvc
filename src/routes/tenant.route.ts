import { auth } from './../middlewares/auth.middleware';
import { Router } from "express";
import TenantController from "../controllers/Tenant/tenant.controller";
const route: Router = Router();

route.get("/tenants", auth, new TenantController().index);
route.post("/tenants/create", auth, new TenantController().create);

export default route;
