exports.seed = async (knex) => {
  await knex("status").insert([   
    { status: "student" },
    { status: "past student" },
    { status: "visitor" },
  ])
}