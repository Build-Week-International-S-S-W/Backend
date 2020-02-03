exports.seed = async (knex) => {
  await knex("contact_info").insert([   

    { contact_name: "Gretta Humilton", 
      phone_number: 342865467, 
      email: "gretta_humilton@gmail.com", 
      relation_id: 1 },

    { contact_name: "George Rock", 
      phone_number: 389568399, 
      email: "george_rock@gmail.com", 
      relation_id: 2 },
  ])
}