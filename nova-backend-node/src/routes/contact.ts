import { Router } from "express";
import { pool } from "../db/init"; // эсвэл таны pool import
import nodemailer from "nodemailer";
const router = Router();

// POST /contact
router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }
//    try {
//     // 1) Nodemailer-тэй transporter үүсгэх
//     const transporter = nodemailer.createTransport({
//       host: "smtp.yourmail.com", // өөрийн SMTP сервер
//       port: 587,
//       secure: false, // TLS ашиглах бол true
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     // 2) Mail options
//     const mailOptions = {
//       from: email, // Form-аас ирсэн хүн
//       to: "nasaa.d@novastd.com", // Хүлээн авагч email
//       subject: `[Contact Form] ${subject}`,
//       text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//     };

//     // 3) Илгээх
//     await transporter.sendMail(mailOptions);

//     res.json({ message: "Email sent successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to send email" });
//   }

  try {
    const query = `
      INSERT INTO contacts (name, email, subject, message)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [name, email, subject, message];

    const result = await pool.query(query, values);

    res.status(201).json({ contact: result.rows[0] });
  } catch (err) {
    console.error("Error inserting contact:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/", async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM contacts ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

export default router;
