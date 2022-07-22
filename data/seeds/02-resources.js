
exports.seed = async function(knex) {
  await knex('resources').truncate()
  await knex('resources').insert([
    { resource_name: 'miracle', resource_description: 'a beneficial, supernatural event'}
  ]);
};
