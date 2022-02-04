const { people } = require('../db/db');
function peopleMalesFemalesIndex(req, res) {
  const { sex } = req.params;
  // if sex == male | female
  if (['male', 'female'].includes(sex)) {
    const malesOrFemales = people.filter((person) => person.sex === sex);
    res.json({
      msg: 'success',
      data: malesOrFemales,
    });
  } else {
    // else
    res.status(400).json({
      msg: 'error',
      error: 'wrong url parameter, use male or female',
    });
  }
}

module.exports = {
  peopleMalesFemalesIndex,
};
