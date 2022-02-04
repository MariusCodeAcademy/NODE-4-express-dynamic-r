const express = require('express');

const router = express.Router();
const { people } = require('../db/db');

// Routes
// GET /api/people (grazina visus zmones json masyvo formatu)
router.get('/api/people', (req, res) => {
  const rez = {
    msg: 'success',
    data: people,
  };

  res.json(rez);
});
// GET /api/people/1 (grazina visus zmogu kurio id 1)
// GET /api/people/:personId (dinamini kelia kur kas parasyto po people/ bus priskirta personId kintamajam  )
router.get('/api/people/:personId', (req, res) => {
  console.log('req ===', req.params.personId);
  const { personId } = req.params;
  // surasti people masyve objekta kurio id === 1
  const found = people.find((person) => person.id === Number(personId));
  console.log('found ===', found);
  if (found) {
    // radom
    res.json({
      msg: 'success',
      data: found,
    });
  } else {
    // neradom
    res.status(400).json({
      msg: 'not found',
      error: `user with id ${personId} was not found`,
    });
  }
});

module.exports = router;
