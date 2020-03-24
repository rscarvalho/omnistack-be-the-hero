const express = require('express');

const app = express();

app.get('/', (_request, response) => {
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Rodolfo Carvalho',
  });
});

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('server is ready');
});
