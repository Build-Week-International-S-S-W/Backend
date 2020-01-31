exports.seed = async (knex) => {
  await knex("students_users").insert([   
    { student_id: 1, user_id: 2 },
    { student_id: 2, user_id: 1 },
  ])
}