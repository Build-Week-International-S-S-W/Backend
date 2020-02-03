const db = require("../../data/dbConfig")

function find() {
  return db("students as s") 
    .join("grades as g", "g.grade", "s.student_grade") 
    .join("classes as c", "c.class", "s.student_class")
    .join("status as st", "st.status", "student_status")
    // .join("contact_info as ci", "ci.contact_name", "student_contact_name")
    .select("s.id", "s.name", "g.grade", "c.class", "s.background", 
        "st.status", "s.age", "s.insurance", "s.birth_certificate", 
        "s.special_needs", "s.student_contact") 
}

function findByClass(class_id) {
	return db("students as s") 
    .join("grades as g", "g.grade", "s.student_grade") 
    .join("classes as c", "c.class", "s.student_class")
    .join("status as st", "st.status", "student_status")
    // .join("contact_info as ci", "ci.contact_name", "student_contact_name")
    .where({ "c.id": class_id })
    .select("s.id", "s.name", "g.grade", "c.class", "s.background", 
        "st.status", "s.age", "s.insurance", "s.birth_certificate", 
        "s.special_needs", "s.student_contact") 
}

function findByGrade(grade_id) {
	return db("students as s") 
    .join("grades as g", "g.grade", "s.student_grade") 
    .join("classes as c", "c.class", "s.student_class")
    .join("status as st", "st.status", "student_status")
    // .join("contact_info as ci", "ci.contact_name", "student_contact_name")
    .where({ "g.id": grade_id })
    .select("s.id", "s.name", "g.grade", "c.class", "s.background", 
        "st.status", "s.age", "s.insurance", "s.birth_certificate", 
        "s.special_needs", "s.student_contact") 
}

function findById(s_id) {
	return db("students as s") 
    .join("grades as g", "g.grade", "s.student_grade") 
    .join("classes as c", "c.class", "s.student_class")
    .join("status as st", "st.status", "student_status")
    // .join("contact_info as ci", "ci.contact_name", "student_contact_name")
    .where({ s_id })
    .first("s.id as s_id", "s.name", "g.grade", "c.class", "s.background", 
        "st.status", "s.age", "s.insurance", "s.birth_certificate", 
        "s.special_needs", "s.student_contact") 
}

async function add(data) {

    const [id] = await db("students as s")
        .join("grades as g", "g.grade", "s.student_grade") 
        .join("classes as c", "c.class", "s.student_class")
        .join("status as st", "st.status", "student_status")
        // .join("contact_info as ci", "ci.contact_name", "student_contact_name")
        .insert(data)
    
    return findById(id)
}

async function update(id, body) {
	await db("students as s") 
        .join("grades as g", "g.grade", "s.student_grade") 
        .join("classes as c", "c.class", "s.student_class")
        .join("status as st", "st.status", "student_status")
        // .join("contact_info as ci", "ci.contact_name", "student_contact_name")
        .where({ id })
		.update(body)

	return findById(id)
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