const express = require('express');
const tasksController = require('./Controllers/tasksController');

const router = express.Router();

router.get('/tasks', tasksController.getAll);

module.exports = router;
