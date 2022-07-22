const db = require('../../data/dbConfig')


const getAll = () => {
    return db('projects').then(projects => {
        return projects.map(project => {
            return {
                ...project,
                project_completed: project.project_completed ? true : false
            }
        })
    })
}

const getById = project_id => {
    return db('projects').where({ project_id }).first()
        .then(project => {
            return {
                ...project,
                project_completed: project.project_completed ? true : false
            }
        })
}

const create = project => {
    return db('projects').insert(project)
        .then(id => getById(id))
}

module.exports = {
    getAll,
    getById,
    create
}
