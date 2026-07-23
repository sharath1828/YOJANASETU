import express from "express";

import {
  createScheme,
  getAllSchemes,
  getSchemeById,
  updateScheme,
  deleteScheme,
  getFeaturedSchemes
} from "../controllers/schemeController.js";

import {
  saveScheme,
  removeSavedScheme,
  getSavedSchemes
} from "../controllers/savedSchemeController.js";

import protect from "../middleware/authMiddleware.js";
import adminOnly from "../middleware/adminMiddleware.js";

const router = express.Router();

/* ========= Public Routes ========= */

router.get("/", getAllSchemes);

router.get("/featured", getFeaturedSchemes);

/* ========= User Saved Schemes ========= */

router.get("/saved", protect, getSavedSchemes);

router.post("/:id/save", protect, saveScheme);

router.delete("/:id/save", protect, removeSavedScheme);

/* ========= Get Single Scheme ========= */

router.get("/:id", getSchemeById);

/* ========= Admin Routes ========= */

router.post("/", protect, adminOnly, createScheme);

router.put("/:id", protect, adminOnly, updateScheme);

router.delete("/:id", protect, adminOnly, deleteScheme);

export default router;