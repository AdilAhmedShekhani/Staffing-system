const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // Add a new candidate
  router.post('/', (req, res) => {
    const { name, skills, experience } = req.body;

    if (!name || !skills || !experience) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const sql = 'INSERT INTO candidates (name, skills, experience) VALUES (?, ?, ?)';
    db.query(sql, [name, skills, experience], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Candidate added successfully' });
    });
  });

  // Get all candidates
  router.get('/', (req, res) => {
    db.query('SELECT * FROM candidates', (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  });

  // Search candidates by skill
  router.get('/search', (req, res) => {
    const skill = req.query.skill;
    db.query(
      'SELECT * FROM candidates WHERE skills LIKE ?',
      [`%${skill}%`],
      (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
      }
    );
  });

  return router;
};
