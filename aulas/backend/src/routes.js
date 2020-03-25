const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

/**
 * Rota / Recurso
 * 
 */

 /**
  * Metodo HTTP
  * 
  * GET: Buscar/listar uma informacao do back-end
  * POST: Criar informacao no back-end
  * PUT: Alterar uma informacao no back end
  * DELET: Deletar uma informaçao no back end
  */

  /**Tipos de parametros
   * 
   * Query Params: Parametros nomeados enviados na rota após simbolo "?"" (filtros, paaginação..)
   * Route Params: Parametros para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */
 
/** app.get('/users', (request, response) => {
*    const params = request.query;
*/

/**app.get('/users/:id', (request, response) => {
*    const params = request.params;
 */

/**
 *   app.post('/users', (request, response) => {
 *   const body = request.body;
 * 
 */

 /**
  * SQL: MySQL, SQlite, PostreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  *
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: tablet (users)
   */


routes.post('/sessions', SessionController.create);


routes.get('/ongs',OngController.index );
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;