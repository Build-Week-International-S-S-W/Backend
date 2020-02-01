const db = require("../../data/dbConfig")

function find() {
  return db("students as s") 
    .join("grades as g", "g.id", "s.grade_id") 
    .join("classes as c", "c.id", "s.class_id")
    .join("status as st", "st.id", "status_id")
    .join("contact_info as ci", "ci.id", "contact_id")
    .select("s.name", "g.grade", "c.class", "s.background", 
        "st.status", "s.age", "s.insurance", "s.birth_certificate", 
        "s.special_needs", "ci.contact_name", "ci.phone_number") 
}

function findByClass(class_id) {
	return db("students as s") 
    .join("grades as g", "g.id", "s.grade_id") 
    .join("classes as c", "c.id", "s.class_id")
    .where({ class_id })
    .join("status as st", "st.id", "status_id")
    .join("contact_info as ci", "ci.id", "contact_id")
    .select("s.name", "g.grade", "c.class", "s.background", 
        "st.status", "s.age", "s.insurance", "s.birth_certificate", 
        "s.special_needs", "ci.contact_name", "ci.phone_number") 
}

function findByGrade(grade_id) {
	return db("students as s") 
    .join("grades as g", "g.id", "s.grade_id") 
    .where({ grade_id })
    .join("classes as c", "c.id", "s.class_id")
    .join("status as st", "st.id", "status_id")
    .join("contact_info as ci", "ci.id", "contact_id")
    .select("s.name", "g.grade", "c.class", "s.background", 
        "st.status", "s.age", "s.insurance", "s.birth_certificate", 
        "s.special_needs", "ci.contact_name", "ci.phone_number") 
}



module.exports = {
  find,
  findByClass,
  findByGrade,
}