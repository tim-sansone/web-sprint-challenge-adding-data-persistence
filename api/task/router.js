// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();

const Tasks = require('./model');

router.get('/', (req, res, next) => {
    Tasks.getAll()
        .then(tasks => res.json(tasks))
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    Tasks.getById(req.params.id)
        .then(task => res.json(task))
})

router.post('/', (req, res, next) => {
    Tasks.create(req.body)
        .then(task => res.status(201).json(task))
        .catch(next)
})

module.exports = router;
