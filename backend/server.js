import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2";
import clientRoutes from "./routes/clients.js";
import jobRoutes from "./routes/jobs.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// ✅ Test database connection
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL Database!");
  }
});

// ✅ Basic route
app.get("/", (req, res) => {
  res.send("Staffing System API is running...");
});

// ✅ API routes
app.use("/api/clients", clientRoutes);
app.use("/api/jobs", jobRoutes);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
