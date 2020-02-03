exports.seed = async (knex) => {
  await knex("students").insert([   

    { name: "Jane Humilton",
      student_grade: "high", 
      student_class: 9, 
      background: "too sleepy to write something", 
      student_status: "student", 
      age: 15, 
      insurance: true, 
      birth_certificate: true, 
      special_needs: "none", 
      student_contact: "name: 'Gretta Humilton', phone number: 342865467, email: 'gretta_humilton@gmail.com'", 
      social_worker: "anna_maria"},

      { name: "Mary Rock",
      student_grade: "middle", 
      student_class: 8, 
      background: "too sleepy to write somithing", 
      student_status: "student", 
      age: 14, 
      insurance: true, 
      birth_certificate: true, 
      special_needs: "alergie: oranges", 
      student_contact: "name: 'George Rock', phone number: 389568399, email: 'george_rock@gmail.com'",
      social_worker: "johny"},
  ])
}