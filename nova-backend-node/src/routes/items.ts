import { Router } from "express";
import db from "../db";
import { Item } from "../types/items";

const router = Router();

// Create item
router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body as Item;
    if (!name) return res.status(400).json({ error: "name is required" });

    const result = await db.query(
      "INSERT INTO items (name, description) VALUES ($1, $2) RETURNING *",
      [name, description ?? null]
    );
    return res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("POST /items error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Read all
router.get("/", async (_req, res) => {
  try {
    const result = await db.query("SELECT * FROM items ORDER BY id DESC");
    return res.json(result.rows);
  } catch (err) {
    console.error("GET /items error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Read one
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query("SELECT * FROM items WHERE id = $1", [id]);
    if (result.rowCount === 0) return res.status(404).json({ error: "Not found" });
    return res.json(result.rows[0]);
  } catch (err) {
    console.error("GET /items/:id error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body as Item;
    const result = await db.query(
      "UPDATE items SET name = $1, description = $2 WHERE id = $3 RETURNING *",
      [name, description ?? null, id]
    );
    if (result.rowCount === 0) return res.status(404).json({ error: "Not found" });
    return res.json(result.rows[0]);
  } catch (err) {
    console.error("PUT /items/:id error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM items WHERE id = $1", [id]);
    return res.status(204).send();
  } catch (err) {
    console.error("DELETE /items/:id error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
