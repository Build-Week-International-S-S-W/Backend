exports.seed = async (knex) => {
  await knex("users").truncate()
  // await knex("roles").truncate()
  // await knex("students_users").truncate()
  await knex("students").truncate()
  // await knex("contact_info").truncate()
  // await knex("relations").truncate()
  await knex("status").truncate()
  await knex("classes").truncate()
  await knex("grades").truncate()
}