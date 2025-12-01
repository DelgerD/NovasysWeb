// src/index.ts
import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { initDb } from "./db/init";

const PORT = process.env.PORT || 8000;

async function start() {
  try {
    // 1) DB init (create tables if not exists)
    await initDb();

    // 2) Start server
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();
