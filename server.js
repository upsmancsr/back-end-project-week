const express = require('express');
const cors = require('cors');
const request = require('supertest');

configureRoutes = require('./config/routes');

const server = express();

server.use(express.json());
server.use(cors());

configureRoutes(server);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running. GET to / was succesful' });
});


module.exports = server;