const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const candidateRoutes = require('./routes/candidates');

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',   // apna MySQL user
  password: '',   // agar password hai to likho
  database: 'staffing_db'
});

db.connect(err => {
  if (err) {
    console.log('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Routes
app.use('/candidates', candidateRoutes(db));

// Default route
app.get('/', (req, res) => {
  res.send('Staffing Management API running...');
});

// Start server
app.listen(5000, () => console.log('Server running on port 5000'));
