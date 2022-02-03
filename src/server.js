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
console.log('people ===', people[0]);

// prideti id lauka prie kiekvieno people el
const item = {
  name: 'Jonas',
  surname: 'Jonaitis',
  sex: 'male',
  age: 26,
  income: 1200,
  married: false,
  hasCar: false,
};
item.id = 1;
console.log('item ===', item);

const peopleWithId = people.map((person, idx) => {
  // pakeisdami orginalo objekto
  // person.id = idx + 1;
  // return person;
  // nepakeisdami orginalo objekto
  return {
    id: idx + 1,
    ...person,
  };
});
// console.log('peopleWithId ===', peopleWithId[0], peopleWithId[1]);
// console.log('peopleWithId ===', peopleWithId);
// console.log('people ===', people);

// MiddleWare

// Routes
// GET /api/people (grazina visus zmones json masyvo formatu)
// GET /api/numbers (grazina visus numbers json masyvo formatu)

// Run the server
app.listen(PORT, console.log(`server online port: ${PORT}`));
