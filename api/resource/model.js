const db = require('../../data/dbConfig')


const getAll = () => {
    return db('resources')
}

const getById = resource_id => {
    return db('resources').where({ resource_id }).first();
}

const create = resource => {
    return db('resources').insert(resource)
        .then(id => getById(id))
}

module.exports = {
    getAll,
    getById,
    create
}
