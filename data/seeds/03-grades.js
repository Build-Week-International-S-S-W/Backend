exports.seed = async (knex) => {
  await knex("grades").insert([   
    { grade: "elementary" },
    { grade: "middle" },
    { grade: "high" },
  ])
}