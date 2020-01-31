exports.seed = async (knex) => {
  await knex("classes").insert([   
    { class: 1, grade_id: 1 },
    { class: 2, grade_id: 1 },
    { class: 3, grade_id: 1 },
    { class: 4, grade_id: 1 },
    { class: 5, grade_id: 1 },
    { class: 6, grade_id: 2 },
    { class: 7, grade_id: 2 },
    { class: 8, grade_id: 2 },
    { class: 9, grade_id: 3 },
    { class: 10, grade_id: 3 },
    { class: 11, grade_id: 3 },
    { class: 12, grade_id: 3 },
  ])
}