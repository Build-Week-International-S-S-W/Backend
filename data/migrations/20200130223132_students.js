exports.up = async function(knex) {

    await knex.schema.createTable("grades", (grade) => {
        grade.increments("id")
        grade.string("grade")
    });

    await knex.schema.createTable("classes", (class_table) => {
        class_table.increments("id")
        class_table.integer("class")
        class_table.integer("grade_id")
            .references("id")
            .inTable("grades")
            .onDelete("SET NULL")
            .onUpdate("SET NULL")
    });

    await knex.schema.createTable("status", (status) => {
        status.increments("id")
        status.string("status")
    });

    await knex.schema.createTable("relations", (relation) => {
        relation.increments("id")
        relation.string("relation")
    });

    await knex.schema.createTable("contact_info", (contact) => {
        contact.increments("id")
        contact.string("name")
            .notNullable()
        contact.integer("phone_number")
        contact.string("email")
        contact.integer("relation_id")
            .references("id")
            .inTable("relations")
            .onDelete("SET NULL")
            .onUpdate("SET NULL")
    });

    await knex.schema.createTable("students", (student) => {
        student.increments("id")
        student.string("name")
            .notNullable()
            .unique()
        student.integer("grade_id")
            .references("id")
            .inTable("grades")
            .onDelete("SET NULL")
            .onUpdate("SET NULL")
        student.integer("class_id")
            .references("id")
            .inTable("classes")
            .onDelete("SET NULL")
            .onUpdate("SET NULL")
        student.string("background", 10000)
        student.integer("status_id")
            .references("id")
            .inTable("status")
            .onDelete("SET NULL")
            .onUpdate("SET NULL")
        student.integer("age")
        student.boolean("insurance")
            .defaultTo(false)
        student.boolean("birth_certificate")
            .defaultTo(true)
        student.string("special_needs", 1000)
        student.integer("contact_id")
            .references("id")
            .inTable("contact_info")
            .onDelete("SET NULL")
            .onUpdate("SET NULL")
    });

    await knex.schema.createTable("students_users", (table) => {
        table.integer("student_id")
            .notNullable()
            .references("id")
            .inTable("students")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.primary(["student_id", "user_id"])
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("students_users");
    await knex.schema.dropTableIfExists("students");
    await knex.schema.dropTableIfExists("contact_info");
    await knex.schema.dropTableIfExists("relations");
    await knex.schema.dropTableIfExists("status");
    await knex.schema.dropTableIfExists("classes");
    await knex.schema.dropTableIfExists("grades");
  };