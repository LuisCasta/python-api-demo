import { Router } from "express";
import { listPermissions, createPermission, deletePermission } from "../controllers/permissions.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

// list all permissions
router.get("/", asyncHandler(listPermissions));

// create permission
router.post("/", asyncHandler(createPermission));

// delete permission
router.delete("/:permId", asyncHandler(deletePermission));

export default router;
