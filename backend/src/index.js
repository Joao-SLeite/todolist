require('express-async-errors');
const errors = require('./middlewares/errorsMiddleware');
const tasksMiddleware = require('./middlewares/tasksMiddleware');
const express = require('express');
const router = require('./router');
require('dotenv').config();

const app = express();

app.use(express.json()); //send Body
app.use(router);
app.use(tasksMiddleware.handleUrlNotFound);
app.use(errors);
// module.exports = app;
app.listen(process.env.PORT || 3000);
