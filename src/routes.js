const express = require('express');
const PersonController = require('./controllers/PersonController');
const PetController = require('./controllers/PetController');

const routes = express.Router();

routes.get('/api/people', PersonController.findAll);
routes.get('/api/people/:id', PersonController.findById);
routes.post('/api/people', PersonController.create);
routes.put('/api/people/:id', PersonController.update);
routes.delete('/api/people/:id', PersonController.delete);

routes.get('/api/pets', PetController.findAll);
routes.get('/api/pets/person/:person_id', PetController.findByPersonId);
routes.post('/api/pets', PetController.create);

module.exports = routes;
