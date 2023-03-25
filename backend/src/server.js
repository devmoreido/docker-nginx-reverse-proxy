const controller = require('./controller');
const express = require('express');
const parser = require('body-parser');
const server = express();
const port = 3000;

server.use(parser.json());
server.get('/', controller.getAll);
server.post('/', controller.post);
server.patch('/:id', controller.patch);
server.delete('/:id', controller.delete);
server.delete('/', controller.deleteAll);

server.listen(port, () => {
  console.log('Listening on:', port);
})