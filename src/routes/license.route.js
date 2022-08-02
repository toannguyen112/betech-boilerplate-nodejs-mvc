import { Router } from "express";
import LicenseController from "../controllers/license.controller";

const route = Router();
route.get("/licenses", LicenseController.index);
route.get("/licenses-permissions", LicenseController.licensePermissions);

export { route };
