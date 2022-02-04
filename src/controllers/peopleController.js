const { people } = require('../db/db');

function peopleIndex(req, res) {
  const rez = {
    msg: 'success',
    data: people,
  };
  res.json(rez);
}

function peopleSingle(req, res) {
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
}

function peopleIncomeAvg() {}

module.exports = {
  peopleIndex,
  peopleSingle,
  peopleIncomeAvg,
};
