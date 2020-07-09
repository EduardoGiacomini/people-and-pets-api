const express = require('express');
const PersonController = require('./controllers/PersonController');

const routes = express.Router();

routes.get('/api/people', PersonController.findAll);

module.exports = routes;
