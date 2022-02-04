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
const genderRoutes = require('./api/gender');

app.use('/', numbersRoutes);
app.use('/', peopleRoutes);
app.use('/', genderRoutes);

// Run the server
app.listen(PORT, console.log(`server online port: ${PORT}`));
