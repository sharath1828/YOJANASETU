import express from "express";

import { getRecommendedSchemes } from "../controllers/recommendationController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

/* ========= AI Recommendations ========= */

router.get("/", protect, getRecommendedSchemes);

export default router;