import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";

const app = express();

/* ================= Middleware ================= */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));

/* ================= Health Route ================= */

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "YOJANASETU Backend is Running 🚀"
  });
});
app.use("/api/auth", authRoutes);
export default app;