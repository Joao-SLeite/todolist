const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json()); //send Body
app.use(router);

module.exports = app;
