import { Router } from "express";
import { pool } from "../db/init";
import nodemailer from "nodemailer";

const router = Router();

// 1. И-мэйл илгээгч (Transporter) тохиргоог гадна талд нэг удаа зарлах нь зүйтэй
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tuguldur8000@gmail.com",
    pass: "lcgg oelz vcuu zjcu", // Энд заавал "App Password" байна
  },
});

// POST /contact
router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const query = `
      INSERT INTO contacts (name, email, subject, message)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [name, email, subject, message];
    const result = await pool.query(query, values);

    // Б) И-мэйл илгээх (Comment-оос гаргав)
    const mailOptions = {
      from: process.env.SMTP_USER, // ТАНЫ и-мэйл
      to: "nasaa.d@novastd.com",    // ХҮЛЭЭН АВАХ и-мэйл
      replyTo: email,               // Хэрэглэгч рүү хариу бичих хаяг
      subject: `[Contact Form] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    //await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "Мэдээлэл хадгалагдаж, и-мэйл илгээгдлээ",
      contact: result.rows[0]
    });

  } catch (err) {
    console.error("Алдаа гарлаа:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Бүх контактыг авах
router.get("/", async (req, res) => {
  try {
    const { start, end } = req.query;
    let sql = "SELECT * FROM contacts WHERE 1=1";
    const params: any[] = [];

    if (start) {
      params.push(start);
      sql += ` AND created_at >= $${params.length}`;
    }
    if (end) {
      params.push(end);
      sql += ` AND created_at <= $${params.length}`;
    }

    sql += " ORDER BY created_at DESC";
    const result = await pool.query(sql, params);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

// Устгах
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM contacts WHERE id=$1", [id]);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

export default router;