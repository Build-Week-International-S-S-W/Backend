const express = require("express")
const studentsModel = require("./students-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const students = await studentsModel.find()
    res.json(students)
  } catch (err) {
    next(err)
  }
})

module.exports = router