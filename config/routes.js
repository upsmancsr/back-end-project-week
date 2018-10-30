const axios = require('axios');

// imports below will be needed for authentication
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const { authenticate } = require('./middlewares');

const db = require('../data/dbConfig');

// need an endpoint for each of the following:
// create note
// get all notes
// get specific note
// edit note
// delete note

module.exports = server => {
    server.post('/notes', createNote);
    server.get('/notes', getNotes);
    server.get('/notes/:id', getNoteById);
    server.put('/notes/:id', editNote);
    server.delete('/notes/:id', deleteNote);
};

const createNote = (req, res) => {
    newNote = req.body;
    
    db('notes')
        .insert(newNote)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
};

getNotes = (req, res) => {
    db('notes')
        .select('*')
        .then(response => {
            res.status(201).json(response);
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

getNoteById = (req, res) => {
    const { id } = req.params;
    db('notes')
        .where({ id })
        .then(response => {
            res.status(201).json(response);
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

editNote = (req, res) => {
    const { id } = req.params;
    const note = req.body;
    db('notes')
        .where({ id })
        .update(note)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

deleteNote = (req, res) => {
    const { id } = req.params;
    db('notes')
        .where({ id })
        .del()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json(err);
        });
};
