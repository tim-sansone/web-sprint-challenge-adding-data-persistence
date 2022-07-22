
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id');
        tbl.varchar('project_name', 80).notNullable();
        tbl.varchar('project_description');
        tbl.boolean('project_completed').defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments('resource_id');
        tbl.varchar('resource_name', 80).notNullable().unique();
        tbl.varchar('resource_description');
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id');
        tbl.varchar('task_description').notNullable();
        tbl.varchar('task_notes');
        tbl.boolean('task_completed').defaultTo(false);
        tbl.integer('project_id')
            .references('project_id')
            .inTable('projects')
            .unsigned()
            .notNullable();
    })
    .createTable('project_resources', tbl => {
        tbl.integer('project_id')
            .references('project_id')
            .inTable('projects')
            .unsigned()
            .notNullable();
        tbl.integer('resource_id')
            .references('resource_id')
            .inTable('resources')
            .unsigned()
            .notNullable()
        tbl.primary(['project_id', 'resource_id'])
    })
};


exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
