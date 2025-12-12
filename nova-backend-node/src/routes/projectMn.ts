// src/routes/news.ts
import { Router } from "express";
import multer from "multer";
import { pool } from "../db/init";


const router = Router();

// Зураг хадгалах middleware
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploadsMn/project/"); // /uploads folder дотор хадгална
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
      "INSERT INTO projectMn (title, date, description, image) VALUES ($1, $2, $3, $4) RETURNING *",
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
    const result = await pool.query( "SELECT id, date, description, title , image FROM projectMn WHERE isVisible=true ORDER BY date DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch project" });
  }
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM projectMn WHERE id=$1", [id]);
  res.json({ message: "Deleted" });
});
router.patch("/hide/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // isVisible-г false болгох
    await pool.query("UPDATE projectMn SET isVisible=false WHERE id=$1", [id]);
    res.json({ message: "News item hidden" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to hide news" });
  }
});

});
export default router;
