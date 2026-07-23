import express from "express";

import {
  getAdminDashboard,
  getUserDashboard
} from "../controllers/dashboardController.js";

import protect from "../middleware/authMiddleware.js";
import adminOnly from "../middleware/adminMiddleware.js";

const router = express.Router();

/* ========= Admin ========= */

router.get("/admin", protect, adminOnly, getAdminDashboard);

/* ========= User ========= */

router.get("/user", protect, getUserDashboard);

export default router;