exports.up = async function(knex) {

    await knex.schema.createTable("grades", (grade) => {
        grade.increments("id")
        grade.string("grade")
            .unique()
        
    });

    await knex.schema.createTable("classes", (class_table) => {
        class_table.increments("id")
        class_table.integer("class")
            .unique()
        class_table.integer("grades_id")
            .references("id")
            .inTable("grades")
            .onDelete("SET NULL")
            .onUpdate("SET NULL")
    });

    await knex.schema.createTable("status", (status) => {
        status.increments("id")
        status.string("status")
            .unique()
    });

    await knex.schema.createTable("students", (student) => {
        student.increments("id")
        student.string("name")
            .notNullable()
            .unique()
        student.string("student_grade")
            .references("grade")
            .inTable("grades")
            .onDelete("SET NULL")
            .onUpdate("SET NULL")
        student.integer("student_class")
            .references("class")
            .inTable("classes")
            .onDelete("SET NULL")
            .onUpdate("SET NULL")
        student.string("background", 10000)
        student.string("student_status")
            .references("status")
            .inTable("status")
            .onDelete("SET NULL")
            .onUpdate("SET NULL")
        student.integer("age")
        student.boolean("insurance")
            .defaultTo(false)
        student.boolean("birth_certificate")
            .defaultTo(true)
        student.string("special_needs", 1000)
        student.string("student_contact")
        student.string("social_worker")
            .references("username")
            .inTable("users")
            .onDelete("SET NULL")
            .onUpdate("SET NULL")
    });
};
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("students");
    await knex.schema.dropTableIfExists("status");
    await knex.schema.dropTableIfExists("classes");
    await knex.schema.dropTableIfExists("grades");
  };