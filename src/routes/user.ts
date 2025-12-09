import { Router } from "express";
import { createUser, listUsers, deleteUser } from "../controllers/user.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

// list all users
router.get("/", asyncHandler(listUsers));

// list create user
router.post("/", asyncHandler(createUser));

// delete users
router.delete("/:userId", asyncHandler(deleteUser));

export default router;
