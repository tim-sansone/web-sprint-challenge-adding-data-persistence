
exports.seed = async function(knex) {
  await knex('projects').truncate()
  await knex('projects').insert([
    { project_name: 'My Project', project_description: "Get my life together"}
  ]);
};
