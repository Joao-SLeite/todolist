require('express-async-errors');
const errors = require('./middlewares/errorsMiddleware');
const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json()); //send Body
app.use(router);
app.use(errors.errors);
module.exports = app;
