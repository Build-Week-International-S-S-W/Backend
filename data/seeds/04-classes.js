exports.seed = async (knex) => {
  await knex("classes").insert([   
    { class: 1, grades_id: 1 },
    { class: 2, grades_id: 1 },
    { class: 3, grades_id: 1 },
    { class: 4, grades_id: 1 },
    { class: 5, grades_id: 1 },
    { class: 6, grades_id: 2 },
    { class: 7, grades_id: 2 },
    { class: 8, grades_id: 2 },
    { class: 9, grades_id: 3 },
    { class: 10, grades_id: 3 },
    { class: 11, grades_id: 3 },
    { class: 12, grades_id: 3 },
  ])
}