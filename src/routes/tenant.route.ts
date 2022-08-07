import { Router } from "express";
import TenantController from "../controllers/Tenant/tenant.controller";
import { auth } from "../middlewares/auth.middleware";
const route = Router();

route.post("/tenant-user/login", TenantController.login);
route.post("/tenant-user/register", TenantController.register);

route.get("/tenants", auth, TenantController.index);
route.post("/tenants/create", auth, TenantController.create);

export default route;
