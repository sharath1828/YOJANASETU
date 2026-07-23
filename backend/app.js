import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes.js";
import schemeRoutes from "./routes/schemeRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import recommendationRoutes from "./routes/recommendationRoutes.js";

const app = express();

/* ========= Middleware ========= */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

/* ========= Health ========= */

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "YOJANASETU Backend is Running 🚀"
  });
});

/* ========= Routes ========= */

app.use("/api/auth", authRoutes);

app.use("/api/schemes", schemeRoutes);

app.use("/api/applications", applicationRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/recommendations", recommendationRoutes);

export default app;