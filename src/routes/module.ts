import { Router } from "express";
import { listModules, createModule, deleteModule } from "../controllers/module.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

// list all modules
router.get("/", asyncHandler(listModules));

// create module
router.post("/", asyncHandler(createModule));

// delete module
router.delete("/:moduleId", asyncHandler(deleteModule));

export default router;
