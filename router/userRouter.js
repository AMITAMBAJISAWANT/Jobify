import { Router } from "express";
const router = Router();

import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from "../controllers/userController.js";

import { authorizePermission } from "../middleware/authMiddelware.js";

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats",authorizePermission('admin'), getApplicationStats);
router.patch("/update-user", updateUser);
export default router;
