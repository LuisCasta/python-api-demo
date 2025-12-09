import { Request } from "express";
import { controllerWrapper } from "../utils/controllerWrapper";
import { ApiError } from "../utils/apiError";
import { ApiResponse } from "../utils/apiResponse";
import { roles } from "../models/role";

export const listRoles = controllerWrapper(async () => {
  if (!roles || roles.length === 0) {
    throw ApiError.notFound("No roles found");
  }
  return ApiResponse.withStatus("Roles", roles, 200);
});

export const createRole = controllerWrapper(async (req: Request) => {
  const { name } = req.body;

  if (!name) {
    throw ApiError.badRequest("name is required");
  }

  const id = roles.length + 1;
  roles.push({ id, name });

  return ApiResponse.withStatus("Role created", roles, 201);
});

export const deleteRole = controllerWrapper(async (req: Request) => {
  const roleId = Number(req.params.roleId);

  if (!roleId || isNaN(roleId)) {
    throw ApiError.badRequest("roleId is invalid.");
  }

  const index = roles.findIndex(r => r.id === roleId);

  if (index === -1) {
    throw ApiError.notFound("Role not found.");
  }

  roles.splice(index, 1);

  return ApiResponse.withStatus("Role deleted", roles, 200);
});
