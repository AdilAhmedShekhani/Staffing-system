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

// ✅ Get all clients
router.get("/", (req, res) => {
    const query = "SELECT * FROM clients";
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// ✅ Add a new client
router.post("/", (req, res) => {
    const { company, contact_person, contact_email, contact_phone } = req.body;

    const query = `
        INSERT INTO clients (company, contact_person, contact_email, contact_phone)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        query,
        [company, contact_person, contact_email, contact_phone],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "Client added successfully!", id: result.insertId });
        }
    );
});

export default router;
