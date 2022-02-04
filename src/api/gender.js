const express = require('express');

const router = express.Router();
const genderController = require('../controllers/genderController');

// GET /api/numbers (grazina visus numbers json masyvo formatu)
router.get('/api/people/gender/:sex', genderController.peopleMalesFemalesIndex);

module.exports = router;
