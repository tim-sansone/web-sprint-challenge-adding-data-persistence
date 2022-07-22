const db = require('../../data/dbConfig')


const getAll = () => {
    return db('projects').then(projects => {
        return projects.map(p => {
            return {
                project_id: p.project_id,
                project_name: p.project_name,
                project_description: p.project_description,
                project_completed: p.project_completed ? true : false
            }
        })
    })
}

const getById = project_id => {
    return db('projects').where({ project_id }).first()
        .then(p => {
            return {
                project_id: p.project_id,
                project_name: p.project_name,
                project_description: p.project_description,
                project_completed: p.project_completed ? true : false
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
