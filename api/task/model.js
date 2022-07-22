const db = require('../../data/dbConfig');

const getAll = () => {
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
        .then(tasks => {
        return tasks.map(task => {
            return {
                ...task,
                task_completed: task.task_completed ? true : false
            }
        })
    })
}

const getById = task_id => {
    return db('tasks').where({ task_id }).first()
        .then(task => {
            return {
                ...task,
                task_completed: task.task_completed ? true : false
            }
        })
}

const create = task => {
    return db('tasks').insert(task)
        .then(id => getById(id))
}

module.exports = {
    getAll,
    getById,
    create
}
