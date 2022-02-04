const express = require('express');

const router = express.Router();
const { numbers } = require('../db/db');

// GET /api/numbers (grazina visus numbers json masyvo formatu)
router.get('/api/numbers', (req, res) => {
  const rez = {
    msg: 'success',
    data: numbers,
  };
  res.json(rez);
});

module.exports = router;
