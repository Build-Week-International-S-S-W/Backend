const db = require("../../data/dbConfig")

function find() {
  return db("students as s") 
    .join("grades as g", "g.grade", "s.student_grade") 
    .join("classes as c", "c.class", "s.student_class")
    .join("status as st", "st.status", "student_status")
    .join("users as u", "u.username", "s.social_worker")
    .select("s.id", "s.name", "g.grade", "c.class", "s.background", 
        "st.status", "s.age", "s.insurance", "s.birth_certificate", 
        "s.special_needs", "s.student_contact", "s.social_worker") 
}

function findByClass(class_id) {
	return db("students as s") 
    .join("grades as g", "g.grade", "s.student_grade") 
    .join("classes as c", "c.class", "s.student_class")
    .join("status as st", "st.status", "student_status")
    .join("users as u", "u.username", "s.social_worker")
    .where({ "c.id": class_id })
    .select("s.id", "s.name", "g.grade", "c.class", "s.background", 
        "st.status", "s.age", "s.insurance", "s.birth_certificate", 
        "s.special_needs", "s.student_contact", "s.social_worker") 
}

function findByGrade(grade_id) {
	return db("students as s") 
    .join("grades as g", "g.grade", "s.student_grade") 
    .join("classes as c", "c.class", "s.student_class")
    .join("status as st", "st.status", "student_status")
    .join("users as u", "u.username", "s.social_worker")
    .where({ "g.id": grade_id })
    .select("s.id", "s.name", "g.grade", "c.class", "s.background", 
        "st.status", "s.age", "s.insurance", "s.birth_certificate", 
        "s.special_needs", "s.student_contact", "s.social_worker") 
}

function findById(s_id) {
	return db("students as s") 
    .join("grades as g", "g.grade", "s.student_grade") 
    .join("classes as c", "c.class", "s.student_class")
    .join("status as st", "st.status", "student_status")
    .join("users as u", "u.username", "s.social_worker")
    .where({ s_id })
    .first("s.id as s_id", "s.name", "g.grade", "c.class", "s.background", 
        "st.status", "s.age", "s.insurance", "s.birth_certificate", 
        "s.special_needs", "s.student_contact", "s.social_worker") 
}

async function add(data) {

// function add(data){

    //   // for postgres
    // return db("students as s")
    // .join("grades as g", "g.grade", "s.student_grade") 
    // .join("classes as c", "c.class", "s.student_class")
    // .join("status as st", "st.status", "student_status")
    // .join("users as u", "u.username", "s.social_worker")
    // .insert(data)
    // .returning("*")


    // // SQLite =======
    const [id] = await db("students as s")
        .join("grades as g", "g.grade", "s.student_grade") 
        .join("classes as c", "c.class", "s.student_class")
        .join("status as st", "st.status", "student_status")
        .join("users as u", "u.username", "s.social_worker")
        .insert(data)
    
    return findById(id)
    // // ===============
}

async function update(id, body) {
    // function update(id, body) {


    // return db("students as s") 
    // .join("grades as g", "g.grade", "s.student_grade") 
    // .join("classes as c", "c.class", "s.student_class")
    // .join("status as st", "st.status", "student_status")
    // .join("users as u", "u.username", "s.social_worker")
    // .where({ id })
    // .update(body)
    // .returning("*")

     // SQLite =======
	await db("students as s") 
        .join("grades as g", "g.grade", "s.student_grade") 
        .join("classes as c", "c.class", "s.student_class")
        .join("status as st", "st.status", "student_status")
        .join("users as u", "u.username", "s.social_worker")
        .where({ id })
		.update(body)

    return findById(id)
    // ============
}

function remove(id) {
	return db("students").where({ id }).del()
}

module.exports = {
  find,
  findByClass,
  findByGrade,
  findById,
  add,
  update,
  remove
}