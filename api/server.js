const express = require('express');
const request = require('supertest');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'server is running' });
});

server.post('/notes', (req, res) => {
  const newNote = req.body; 

  res.status(200).json(newNote);
});

module.exports = server;