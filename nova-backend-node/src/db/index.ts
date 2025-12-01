// src/db/index.ts
import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL not defined");

export const pool = new Pool({ connectionString });

// convenience default export with query function
export default {
  query: (text: string, params?: any[]) => pool.query(text, params),
  pool,
};
