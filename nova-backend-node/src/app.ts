import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

// Routes
import healthRouter from "./routes/health";
import itemsRouter from "./routes/items";
import newsRouter from "./routes/news";
import contactRouter from "./routes/contact";
import adminRouter from "./routes/admin";
import usersRouter from "./routes/users";
import newsEnRouter from "./routes/newsEn";

const app = express();

// --- Middlewares ---

// Security headers
app.use(helmet());

// Cookie parsing
app.use(cookieParser());

// JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP request logger
app.use(morgan("dev"));

// CORS: frontend URL болон cookie зөв дамжуулах
app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    credentials: true,               // cookie дамжуулах
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

// --- Routes ---
app.use("/items", itemsRouter);
app.use("/news", newsRouter);
app.use("/contacts", contactRouter);
app.use("/admin", adminRouter);
app.use("/users", usersRouter);
app.use("/newsEn", newsEnRouter);

// Root endpoint
app.get("/", (_req, res) => {
  res.json({ message: "NovaSys Backend (Node + TS) — running" });
});

export default app;
