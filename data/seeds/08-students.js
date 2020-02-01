exports.seed = async (knex) => {
  await knex("students").insert([   

    { name: "Jane Humilton",
      grade_id: 3, 
      class_id: 9, 
      background: "too sleepy to write something", 
      status_id: 1, 
      age: 15, 
      insurance: true, 
      birth_certificate: true, 
      special_needs: "none", 
      contact_id: 1 },

      { name: "Mary Rock",
      grade_id: 2, 
      class_id: 8, 
      background: "too sleepy to write somithing", 
      status_id: 1, 
      age: 14, 
      insurance: true, 
      birth_certificate: true, 
      special_needs: "alergie: oranges", 
      contact_id: 2 },
  ])
}