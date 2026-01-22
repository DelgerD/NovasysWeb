import express, { Request, Response, NextFunction } from "express";
import { pool } from "../db/init";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "SUPER_SECRET_KEY";

// Middleware: cookie болон JWT шалгах
export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.admin_token;
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number; email: string };
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

// Login route
// router.post("/login", async (req: Request, res: Response) => {
//   const { email, password } = req.body;
//   if (!email || !password) return res.status(400).json({ error: "Missing credentials" });

//   try {
//     const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
//     if (result.rows.length === 0) return res.status(401).json({ error: "Invalid credentials" });

//     const user = result.rows[0];
//     const match = await bcrypt.compare(password, user.password_hash);
//     if (!match) return res.status(401).json({ error: "Invalid credentials" });

//     // JWT үүсгэх
//     const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1d" });

//     // Cookie-д хадгалах
//   res.cookie("admin_token", token, {
//   httpOnly: false, // Middleware уншихад хэрэгтэй бол false (эсвэл true байлгаад front-оор тавих)
//   sameSite: "none",
//   secure: true,
//   maxAge: 24 * 60 * 60 * 1000,
//   path: "/",
// });

//     // return res.json({ message: "Success" });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "Server error" });
//   }
// });
// Backend login route
router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  
  try {
    const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    if (result.rows.length === 0) return res.status(401).json({ error: "Хэрэглэгч олдсонгүй" });

    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) return res.status(401).json({ error: "Нууц үг буруу" });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1d" });

    // Күүки бичихээс гадна JSON-оор заавал буцааж өгнө
    return res.json({ 
      success: true,
      token: token 
    });
  } catch (err) {
    return res.status(500).json({ error: "Серверийн алдаа" });
  }
});
router.post("/logout", (_req, res) => {
  res.clearCookie("admin_token", { path: "/" });
  res.json({ message: "Logged out" });
});

// Protected route жишээ
router.get("/me", requireAdmin, (req: Request, res: Response) => {
  res.json({ admin: req.admin });
});

export default router;
