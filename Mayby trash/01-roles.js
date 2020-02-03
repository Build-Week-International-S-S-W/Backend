exports.seed = async (knex) => {
  await knex("roles").insert([   
    { role_name: "administrator" },
    { role_name: "social worker" },
  ])
}