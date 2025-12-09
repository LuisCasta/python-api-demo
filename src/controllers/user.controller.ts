import { Request } from "express";
import { controllerWrapper } from "../utils/controllerWrapper";
import { ApiError } from "../utils/apiError";
import { ApiResponse } from "../utils/apiResponse";
import { users } from "../models/user";

export const listUsers = controllerWrapper(async (_req: Request) => {

  if (!users || users.length === 0) {
    throw ApiError.notFound("No users found");
  }
  return ApiResponse.withStatus("Users", users, 200);
});

export const createUser = controllerWrapper(async (req: Request) => {
  const {
    name,
    phone,
  } = req.body;

  
  if (!name || !phone) {
    throw ApiError.badRequest("name and phone are required");
  }

  const count = users.length;
  users.push({
    name,
    phone,
    id: count + 1
  });
  return ApiResponse.withStatus("User created", users, 201);
});

export const deleteUser = controllerWrapper(async (req: Request) => {
  const userId = Number(req.params.userId);

  if (!userId || isNaN(userId)) {
    throw ApiError.badRequest("userId is invalid.");
  }

  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    throw ApiError.notFound("User not found.");
  }

  // Eliminar directamente dentro del array importado
  users.splice(index, 1);

  return ApiResponse.withStatus("User deleted", users, 200);
});

