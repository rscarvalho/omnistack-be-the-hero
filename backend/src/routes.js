const SessionController = require('./controllers/SessionController');

const ProfileController = require('./controllers/ProfileController');

const IncidentController = require('./controllers/IncidentController');

const express = require('express');
const NgoController = require('./controllers/NgoController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);
routes.delete('/sessions', SessionController.delete);

routes.get('/ongs', NgoController.index);
routes.post('/ongs', NgoController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
