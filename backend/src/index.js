const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Entidades:
 * - ngo
 * - incidents
 *
 * Funcionalidades
 * - login
 * - cadastro de ong
 * - logout de ong
 * - cadastrar novos casos
 * - deletar casos
 * - listar casos especificos de uma ong
 * - listar todos os casos
 * - entrar em contato com a ong
 */

// query builder: knex

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('server is ready');
});
