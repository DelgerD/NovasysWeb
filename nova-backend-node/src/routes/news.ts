// src/routes/news.ts
import { Router } from "express";
import multer from "multer";
import { pool } from "../db/init";


const router = Router();

// Зураг хадгалах middleware
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // /uploads folder дотор хадгална
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, date, description } = req.body;
    const imagePath = req.file ? req.file.filename : null;

    const result = await pool.query(
      "INSERT INTO news (title, date, description, image) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, date, description, imagePath]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/", async (_req, res) => {
  try {
    const result = await pool.query("SELECT id, date, description, title FROM news ORDER BY date DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});
export default router;
