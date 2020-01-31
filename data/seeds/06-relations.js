exports.seed = async (knex) => {
  await knex("relations").insert([   
    { relation: "mother" },
    { relation: "father" },
  ])
}