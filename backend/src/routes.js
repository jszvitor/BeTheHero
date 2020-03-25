const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router(); //estou desaclopando o módulo de rotas do express em uma nova variável

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.all);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);// index é o mesmo que all/list

routes.get('/incidents', IncidentController.all);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes; //é dessa forma que a gente faz para exportar uma variável dentro de um arquivo com o node
