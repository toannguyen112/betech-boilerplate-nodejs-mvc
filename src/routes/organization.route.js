import { Router } from "express";
import OrganizationController from "../controllers/organization.controller";

const route = Router();
route.get("/organizations", OrganizationController.index);
export { route };
