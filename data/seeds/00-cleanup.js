exports.seed = async (knex) => {
  // await knex("users").truncate()
  // await knex("students").truncate()
  // await knex("status").truncate()
  // await knex("classes").truncate()
  // await knex("grades").truncate()

  await knex("users").del()
  await knex("students").del()
  await knex("status").del()
  await knex("classes").del()
  await knex("grades").del()
}