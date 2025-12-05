import { Router } from "express";
import { pool } from "../db/init";
const router = Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return res.status(400).json({ error: "Missing credentials" });

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1 AND password = $2 AND role='admin'",
      [username, password]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Амжилттай login
    return res.json({ message: "Success" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});
export default router;
