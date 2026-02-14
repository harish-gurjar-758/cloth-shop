import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// Custom modules
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// 🔗 Connect Database
connectDB();

// 🛡 Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// 📌 Routes
app.use("/api/auth", authRoutes);

// 🚀 Server Start
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
