const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

// data
const db = require('./db/db');

// const people = db.people;
// const numbers = db.numbers;

const { people, numbers } = db;

// MiddleWare
app.use(morgan('dev'));

// Routes
// GET /api/people (grazina visus zmones json masyvo formatu)
app.get('/api/people', (req, res) => {
  const rez = {
    msg: 'success',
    data: people,
  };

  res.json(rez);
});
// GET /api/numbers (grazina visus numbers json masyvo formatu)

// GET /api/people/1 (grazina visus zmogu kurio id 1)
// GET /api/people/:personId (dinamini kelia kur kas parasyto po people/ bus priskirta personId kintamajam  )
app.get('/api/people/:personId', (req, res) => {
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

// GET /api/people/male (grazinam visus vyrus)

// Run the server
app.listen(PORT, console.log(`server online port: ${PORT}`));
