
exports.seed = async function(knex) {
  await knex('tasks').truncate()
  await knex('tasks').insert([
    { task_description: 'pray for a miracle', task_notes: 'figure out who to pray to', project_id: 1}
  ]);
};
