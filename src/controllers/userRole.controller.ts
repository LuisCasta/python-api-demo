import { Request } from "express";
import { controllerWrapper } from "../utils/controllerWrapper";
import { ApiError } from "../utils/apiError";
import { ApiResponse } from "../utils/apiResponse";
import { userRoles } from "../models/userRole";

export const listUserRoles = controllerWrapper(async () => {
  if (!userRoles || userRoles.length === 0) {
    throw ApiError.notFound("No user roles found");
  }
  return ApiResponse.withStatus("UserRoles", userRoles, 200);
});

export const createUserRole = controllerWrapper(async (req: Request) => {
  const { userId, roleId } = req.body;

  if (!userId || !roleId) {
    throw ApiError.badRequest("userId and roleId are required");
  }

  const id = userRoles.length + 1;

  userRoles.push({
    id,
    userId,
    roleId
  });

  return ApiResponse.withStatus("UserRole created", userRoles, 201);
});

export const deleteUserRole = controllerWrapper(async (req: Request) => {
  const relId = Number(req.params.relId);

  if (!relId || isNaN(relId)) {
    throw ApiError.badRequest("relId is invalid.");
  }

  const index = userRoles.findIndex(r => r.id === relId);

  if (index === -1) {
    throw ApiError.notFound("UserRole relation not found.");
  }

  userRoles.splice(index, 1);

  return ApiResponse.withStatus("UserRole deleted", userRoles, 200);
});
