const express = require('express');
const server = express();

const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

server.use(express.json())
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('./api/tasks', taskRouter)

server.get('/', (req, res) => {
    res.send('Hello from base URL')
})

server.use((error, req, res, next) => {
    res.status(error.status || 500).json({message: error.message || 'internal server error'})
})

module.exports = server;
