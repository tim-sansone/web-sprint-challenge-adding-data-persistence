// build your `/api/projects` router here
const express = require('express');
const router = express.Router();

const Projects = require('./model');

router.get('/', (req, res, next) => {
    Projects.getAll()
        .then(projects => res.json(projects))
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    Projects.getById(req.params.id)
        .then(project => res.json(project))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Projects.create(req.body)
        .then(project => res.status(201).json(project))
        .catch(next)
})

module.exports = router;
