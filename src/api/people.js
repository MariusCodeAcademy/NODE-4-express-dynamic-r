const express = require('express');

const router = express.Router();
const peopleController = require('../controllers/peopleController');
const { people } = require('../db/db');

// Routes

router.get('/api/people', peopleController.peopleIndex);
router.get('/api/people/:personId', peopleController.peopleSingle);

router.get('/api/people/income/avg', (req, res) => {
  // suskaiciuoti vid
  // [1, 2, 3]
  // [1/3 + 2/3 + 3/3 ]
  // const arr = people.map((person) => person.income);
  // let total = 0;
  // arr.forEach((el) => {
  //   total = total + el;
  // });
  // const avg = total / arr.length;
  const avg = people.reduce((total, person, idx, allArr) => {
    const currentAvg = person.income / allArr.length;
    const currentTotal = total + currentAvg;
    return currentTotal;
  }, 0);

  // sutrumpintai
  // const avg = people.reduce(
  //   (total, person, idx, allArr) => total + person.income / allArr.length,
  //   0
  // );

  // console.log('avg ===', avg);

  res.json({
    msg: 'success',
    data: avg.toFixed(2),
  });
});

module.exports = router;
