const bcrypt = require("bcryptjs")
const db = require("../../data/dbConfig")

function find() {
  return db("users") 
    // .join("roles", "roles.id", "users.role_id") 
    // .select("users.id", "users.username", "users.name", "users.email", 
    //         "users.phone_number", "users.password", "roles.role_name") 
    .select("users.id", "users.username", "users.name", "users.email", 
    "users.phone_number", "users.password", "users.role")
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .select("id", "username", "password")
}

async function add(user) {
  user.password = await bcrypt.hash(user.password, 10)
  const [id] = await db("users")
    // .join("roles", "roles.id", "users.role_id") 
    .insert(user)
 
  return findById(id)
}

function findById(u_id) {
    return db("users")
      .where({ u_id })
      // .join("roles", "roles.id", "users.role_id") 
      // .first("users.id as u_id", "users.username", "users.name", "users.email", 
      //       "users.phone_number", "users.password", "roles.role_name")
      .first("users.id as u_id", "users.username", "users.name", "users.email", 
        "users.phone_number", "users.password", "users.role")
}

module.exports = {
  add,
  find,
  findBy,
  findById,
}