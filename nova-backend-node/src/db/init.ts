// src/db/init.ts
import db from "./index"; // манай db wrapper (экспортолсон query/pool)
import { PoolClient } from "pg";
// src/db/init.ts
import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "NovaSys",
  password: "123",
  port: 5432,
});

export async function initDb(): Promise<void> {
  let client: PoolClient | undefined;
  try {
    client = await db.pool.connect();

    // BEGIN optional - бүгдийг нэг transaction-д хийх бол
    await client.query("BEGIN");

    // Жишээ: items хүснэгт
    await client.query(`
      CREATE TABLE IF NOT EXISTS items (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
      );
    `);

    // Жишээ: users хүснэгт
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        full_name TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
      );
    `);

    // Жишээ: orders хүснэгт (foreign key)
    await client.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
        item_id INTEGER REFERENCES items(id) ON DELETE SET NULL,
        qty INTEGER DEFAULT 1,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
      );
    `);
    await client.query(`
        CREATE TABLE IF NOT EXISTS news (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        description TEXT NOT NULL,
        image VARCHAR(255),
        created_at TIMESTAMP DEFAULT NOW()
      );
    `); await client.query(`
        CREATE TABLE IF NOT EXISTS newsEn (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        description TEXT NOT NULL,
        image VARCHAR(255),
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);
    await client.query(`
        CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      subject VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT now()
      );
    `);

    // END transaction
    await client.query("COMMIT");
    console.log("✅ Database initialized (tables exist or were created).");
  } catch (err) {
    if (client) {
      try {
        await client.query("ROLLBACK");
      } catch (rbErr) {
        console.error("Rollback failed:", rbErr);
      }
    }
    console.error("❌ Error initializing database:", err);
    throw err;
  } finally {
    if (client) client.release();
  }
}
