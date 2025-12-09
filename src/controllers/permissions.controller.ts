import { Request } from "express";
import { controllerWrapper } from "../utils/controllerWrapper";
import { ApiError } from "../utils/apiError";
import { ApiResponse } from "../utils/apiResponse";
import { permissions } from "../models/permissions";

export const listPermissions = controllerWrapper(async () => {
  if (!permissions || permissions.length === 0) {
    throw ApiError.notFound("No permissions found");
  }
  return ApiResponse.withStatus("Permissions", permissions, 200);
});

export const createPermission = controllerWrapper(async (req: Request) => {
  const { roleId, moduleId, actions, visibleFields, editableFields } = req.body;

  if (!roleId || !moduleId || !actions || !Array.isArray(actions)) {
    throw ApiError.badRequest("roleId, moduleId and actions[] are required");
  }

  const id = permissions.length + 1;

  permissions.push({
    id,
    roleId,
    moduleId,
    actions,
    visibleFields,
    editableFields
  });

  return ApiResponse.withStatus("Permission created", permissions, 201);
});

export const deletePermission = controllerWrapper(async (req: Request) => {
  const permId = Number(req.params.permId);

  if (!permId || isNaN(permId)) {
    throw ApiError.badRequest("permId is invalid.");
  }

  const index = permissions.findIndex(p => p.id === permId);

  if (index === -1) {
    throw ApiError.notFound("Permission not found.");
  }

  permissions.splice(index, 1);

  return ApiResponse.withStatus("Permission deleted", permissions, 200);
});
