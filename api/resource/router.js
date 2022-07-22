// build your `/api/resources` router here
const express = require('express');
const router = express.Router();

const Resources = require('./model');

router.get('/', (req, res, next) => {
    Resources.getAll()
        .then(resources => res.json(resources))
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    Resources.getById(req.params.id)
        .then(resource => res.json(resource))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resources.create(req.body)
        .then(resource => res.status(201).json(resource))
        .catch(next)
})

module.exports = router;
