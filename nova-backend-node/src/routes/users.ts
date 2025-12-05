import express from "express";
import bcrypt from "bcrypt";
import { pool } from "../db/init"; // PostgreSQL pool

const router = express.Router();

// POST /users - шинэ хэрэглэгч нэмэх
router.post("/", async (req, res) => {
  const { email, password, full_name } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email болон password заавал бөглөх ёстой." });
  }

  try {
    // 1. Password-г hash хийх
    const saltRounds = 10;
    const password_hash = await bcrypt.hash(password, saltRounds);

    // 2. Database руу нэмэх
    const result = await pool.query(
      "INSERT INTO users (email, password_hash, full_name) VALUES ($1, $2, $3) RETURNING id, email, full_name, created_at",
      [email, password_hash, full_name || null]
    );

    return res.status(201).json(result.rows[0]);
  } catch (err: any) {
    console.error(err);
    if (err.code === "23505") { // Unique violation
      return res.status(409).json({ error: "Ийм имэйлийн хэрэглэгч аль хэдийн байна." });
    }
    return res.status(500).json({ error: "Серверийн алдаа гарлаа." });
  }
});

export default router;
