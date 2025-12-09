import { Router } from "express";
import { listUserRoles, createUserRole, deleteUserRole } from "../controllers/userRole.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

// list all user-role relations
router.get("/", asyncHandler(listUserRoles));

// create user-role relation
router.post("/", asyncHandler(createUserRole));

// delete relation
router.delete("/:relId", asyncHandler(deleteUserRole));

export default router;
