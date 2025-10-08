// backend/routes/jobs.js
import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// ✅ MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// ✅ Create Job
router.post("/", (req, res) => {
  const { title, description, client_id, status } = req.body;
  const sql = "INSERT INTO jobs (title, description, client_id, status) VALUES (?, ?, ?, ?)";
  db.query(sql, [title, description, client_id, status || "open"], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, message: "Job created successfully" });
  });
});

// ✅ Get all Jobs
router.get("/", (req, res) => {
  const sql = `
    SELECT jobs.*, clients.name AS client_name
    FROM jobs
    LEFT JOIN clients ON jobs.client_id = clients.id
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// ✅ Delete Job
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM jobs WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Job deleted successfully" });
  });
});

export default router;
