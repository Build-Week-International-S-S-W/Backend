exports.seed = async (knex) => {
  await knex("users").insert([   

    { username: "boss", 
      name: "Big Boss", 
      email: "big_boss@gmail.com", 
      phone_number: 1234567890, 
      password: "YoullNeverGuess", 
      role: "administrator" },

    { username: "anna_maria", 
      name: "Anna Maria Superkind", 
      email: "anna_maria_superkind@gmail.com", 
      phone_number: 2345678901, 
      password: "Bla_Bla_Bla", 
      role: "social worker" },

    { username: "johny", 
      name: "Johny Helper", 
      email: "johny_helper@gmail.com", 
      phone_number: 3456789012, 
      password: "Just_Password", 
      role: "social worker" },

  ])
}