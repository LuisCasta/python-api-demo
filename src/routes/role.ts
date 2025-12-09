import { Router } from "express";
import { listRoles, createRole, deleteRole } from "../controllers/role.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

// list all roles
router.get("/", asyncHandler(listRoles));

// create role
router.post("/", asyncHandler(createRole));

// delete role
router.delete("/:roleId", asyncHandler(deleteRole));

export default router;
