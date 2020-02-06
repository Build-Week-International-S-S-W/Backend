exports.up = async function(knex) {

    await knex.schema.createTable("users", (users) => {
        users.increments("id")
        users.string("username", 15)
            .notNullable()
            .unique()
        users.string("name")
        users.string("email")
            .unique()
        users.bigInteger("phone_number")
            .unique()
        users.string("password")
            .notNullable()
        users.string("role")
            .defaultTo("social worker")
    });
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("users");
  };