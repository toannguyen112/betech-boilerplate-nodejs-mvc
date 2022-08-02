import { Router } from "express";
import TenantUserController from "../controllers/Tenant/tenant_user.controller";

const route = Router();
route.get("/tenant-user", TenantUserController.index);

export { route };
