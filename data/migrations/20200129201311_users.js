exports.up = async function(knex) {

    // await knex.schema.createTable("roles", (roles) => {
    //     roles.increments("id")
    //     roles.string("role_name")
    // });

    await knex.schema.createTable("users", (users) => {
        users.increments("id")
        users.string("username", 15)
            .notNullable()
            .unique()
        users.string("name")
        users.string("email")
            .unique()
        users.integer("phone_number")
            .unique()
        users.string("password")
            .notNullable()
        // users.integer("role_id")
        //     .references("id")
        //     .inTable("roles")
        //     .onDelete("SET NULL")
        //     .onUpdate("SET NULL")
        users.string("role")
            .defaultTo("social worker")
    });
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("users");
    // await knex.schema.dropTableIfExists("roles");
  };