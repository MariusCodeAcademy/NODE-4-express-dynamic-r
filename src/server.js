require('dotenv').config();
const express = require('express');
// const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// MiddleWare
app.use(morgan('dev'));

// Routes
const peopleRoutes = require('./api/people');
const numbersRoutes = require('./api/numbers');

app.use('/', numbersRoutes);
app.use('/', peopleRoutes);

// GET /api/people/male (grazinam visus vyrus)
// 1. sukuriam endpoint
// const males = people.filter((person) => person.sex === 'male');
// console.log('males ===', males);
// 2. paieskom su filter ar kazkaip atrenkam vyrus
// 3. grazinam vyru masyva

// GET /api/people/gender/:sex
// (jei sex === male atrenkam male)
// (jei sex === female atrenkam female)
// (jei sex === nei male nei female pranesam apie klaida su status 400)

// GET /api/people/drivers (grazinam zmones turincius automobili)

// GET /api/people/over30 (grazinam zmones kuriu amzius daugiau nei 30)

// GET /api/people/over/:age (grazinam zmones kuriu amzius daugiau nei :age)

// GET /api/people/income/below/:salary (grazinam zmoniu masyva kurie uzdirba maziau nei :salary)
//PVZ /api/people/income/below/1500

// GET /api/people/married (grazinam vedusius zmones)

// Run the server
app.listen(PORT, console.log(`server online port: ${PORT}`));
