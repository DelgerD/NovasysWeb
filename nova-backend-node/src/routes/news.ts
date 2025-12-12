// src/routes/news.ts
import { Router } from "express";
import multer from "multer";
import { pool } from "../db/init";
import fs from "fs";
import path from "path";

const router = Router();

// Зураг хадгалах middleware
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploadsMn/"); // /uploads folder дотор хадгална
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
    const result = await pool.query("SELECT id, date, description, title , image FROM news ORDER BY date DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch news" });
  }
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // 1️⃣ Мэдээллийг татах (зурган filename-г авах)
    const result = await pool.query("SELECT image FROM news WHERE id=$1", [id]);
    const imageName = result.rows[0]?.image;

    // 2️⃣ Хэрэв зураг байгаа бол файл системээс устгах
    if (imageName) {
      const filePath = path.join(__dirname, "../uploadsMn", imageName);
      fs.unlink(filePath, (err) => {
        if (err) console.error("Failed to delete image file:", err);
        else console.log("Image deleted:", filePath);
      });
    }

    // 3️⃣ DB-с record-ийг устгах
    await pool.query("DELETE FROM news WHERE id=$1", [id]);
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete" });
  }
});


});
export default router;
