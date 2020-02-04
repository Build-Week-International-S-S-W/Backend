exports.seed = async (knex) => {
  await knex("users").truncate()
  await knex("students").truncate()
  await knex("status").truncate()
  await knex("classes").truncate()
  await knex("grades").truncate()
}