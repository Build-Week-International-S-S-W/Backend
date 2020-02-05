const bcrypt = require("bcryptjs")
function hash(password){
  return bcrypt.hash(password, 10)
}

exports.seed = async (knex) => {
  await knex("users").insert([   

    { username: "boss", 
      name: "Big Boss", 
      email: "big_boss@gmail.com", 
      phone_number: 1234567890, 
      password: `${await hash("YoullNeverGuess")}`,
      role: "administrator" },

    { username: "anna_maria", 
      name: "Anna Maria Superkind", 
      email: "anna_maria_superkind@gmail.com", 
      phone_number: 2345678901, 
      password: `${await hash("Bla_Bla_Bla")}`,
      role: "social worker" },

    { username: "johny", 
      name: "Johny Helper", 
      email: "johny_helper@gmail.com", 
      phone_number: 3456789012, 
      password: `${await hash("Just_Password")}`, 
      role: "social worker" },

    { username: "alex_k", 
      name: "Alex Karpenko", 
      email: "alex_k@gmail.com", 
      phone_number: 1452458659, 
      password: `${await hash("I_Like_Traveling")}`, 
      role: "social worker" },

    { username: "maria_2020", 
      name: "Maria Horda", 
      email: "maria_horda@gmail.com", 
      phone_number: 2341987655, 
      password: `${await hash("JustDo1t")}`, 
      role: "social worker" },

  ])
}