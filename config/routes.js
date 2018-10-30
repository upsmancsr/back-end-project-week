const axios = require('axios');

// imports below will be needed for authentication
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const { authenticate } = require('./middlewares');

const db = require('../data/dbConfig');

// need an endpoint for each of the following:
// create note
// view note
// edit note
// delete note

module.exports = server => {
    server.post('/notes', createNote);
    // server.get('/notes/:id', getNoteById);
    // server.put('/notes/:id', editNote);
    // server.delete('/notes/:id', deleteNote);
};

createNote = (req, res) => {
    newNote = req.body;
    db('notes')
        .insert(newNote)
        .then(response =>{
            res.status(201).json(response);
        })
        .catch(err => {
            res.status(500).json(err);
        });
};