import { Router } from "express";

import userRoutes from "./user";
import roleRoutes from "./role";
import userRoleRoutes from "./userRole";
import moduleRoutes from "./module";
import permissionsRoutes from "./permissions";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Backend funcionando" });
});

// Users
router.use("/user", userRoutes);

// Roles
router.use("/role", roleRoutes);

// User-Role relations
router.use("/userRole", userRoleRoutes);

// Modules
router.use("/module", moduleRoutes);

// Permissions
router.use("/permissions", permissionsRoutes);

export default router;
