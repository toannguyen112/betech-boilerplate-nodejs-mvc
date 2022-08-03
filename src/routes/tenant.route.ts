import { Router } from "express";
import TenantController from "../controllers/Tenant/tenant.controller";

const route = Router();
route.get("/tenants", TenantController.index);
route.get("/tenant-users", TenantController.tenantUsers);

export default route;
