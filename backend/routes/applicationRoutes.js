import express from "express";

import {
  applyForScheme,
  getMyApplications,
  getAllApplications,
  getApplicationById,
  approveApplication,
  rejectApplication
} from "../controllers/applicationController.js";

import protect from "../middleware/authMiddleware.js";
import adminOnly from "../middleware/adminMiddleware.js";

const router = express.Router();

/* ========= Admin Routes ========= */

router.get("/", protect, adminOnly, getAllApplications);

router.get("/my", protect, getMyApplications);

router.post("/", protect, applyForScheme);

router.get("/:id", protect, adminOnly, getApplicationById);

router.put("/:id/approve", protect, adminOnly, approveApplication);

router.put("/:id/reject", protect, adminOnly, rejectApplication);

export default router;