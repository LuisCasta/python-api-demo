import { Request } from "express";
import { controllerWrapper } from "../utils/controllerWrapper";
import { ApiError } from "../utils/apiError";
import { ApiResponse } from "../utils/apiResponse";
import { modules } from "../models/module";

export const listModules = controllerWrapper(async () => {
  if (!modules || modules.length === 0) {
    throw ApiError.notFound("No modules found");
  }
  return ApiResponse.withStatus("Modules", modules, 200);
});

export const createModule = controllerWrapper(async (req: Request) => {
  const { name } = req.body;

  if (!name) {
    throw ApiError.badRequest("name is required");
  }

  const id = modules.length + 1;

  modules.push({
    id,
    name
  });

  return ApiResponse.withStatus("Module created", modules, 201);
});

export const deleteModule = controllerWrapper(async (req: Request) => {
  const moduleId = Number(req.params.moduleId);

  if (!moduleId || isNaN(moduleId)) {
    throw ApiError.badRequest("moduleId is invalid.");
  }

  const index = modules.findIndex(m => m.id === moduleId);

  if (index === -1) {
    throw ApiError.notFound("Module not found.");
  }

  modules.splice(index, 1);

  return ApiResponse.withStatus("Module deleted", modules, 200);
});
