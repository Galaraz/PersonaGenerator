const { Router } = require('express');
const PersonaController = require('../Controller/PersonaController');

const PersonaRoute = Router();

PersonaRoute
  .get('/', PersonaController.getAllPersonas)
  .post('/', PersonaController.createPersona);
/* PersonaRoute 
  .get('/:id', PersonaController.getOnePersona)   */

  module.exports = PersonaRoute;