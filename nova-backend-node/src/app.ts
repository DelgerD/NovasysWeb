// src/app.ts
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan"; // optional: request log
import healthRouter from "./routes/health";
import itemsRouter from "./routes/items";
import newsRouter from "./routes/news";
import contactRouter from "./routes/contact";
const app = express();

// --- Middlewares ---

// Security headers
app.use(helmet());

// Enable CORS (frontend URL-г тохируулах боломжтой)
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// JSON parsing
app.use(express.json());

// HTTP request logger
app.use(morgan("dev"));

// --- Routes ---
app.use("/health", healthRouter);
app.use("/items", itemsRouter);
app.use("/news", newsRouter);
app.use("/contacts", contactRouter);
// Root endpoint
app.get("/", (_req, res) => {
  res.json({ message: "NovaSys Backend (Node + TS) — running" });
});

export default app;
