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

// Routes

// Run the server
app.listen(PORT, console.log(`server online port: ${PORT}`));
