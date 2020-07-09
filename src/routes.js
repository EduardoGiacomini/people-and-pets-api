const express = require('express');
const PersonController = require('./controllers/PersonController');

const routes = express.Router();

routes.get('/api/people', PersonController.findAll);
routes.post('/api/people', PersonController.create);
routes.put('/api/people/:id', PersonController.update);
routes.delete('/api/people/:id', PersonController.delete);

module.exports = routes;
