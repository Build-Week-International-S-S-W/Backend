const db = require("../../data/dbConfig")

function find() {
  return db("users") 
    .join("roles", "roles.id", "users.role_id") 
    .select("users.id", "users.username", "users.name", "users.email", 
            "users.phone_number", "users.password", "roles.role_name") 
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .select("id", "username", "password")
}

async function add(user) {
  const [id] = await db("users")
    .insert(user)
 
  return findById(id)
}

function findById(id) {
    return db("users")
      .where({ id })
      .first("id", "username", "password")
}

module.exports = {
  add,
  find,
  findBy,
  findById,
}