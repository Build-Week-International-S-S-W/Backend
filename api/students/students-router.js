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

router.get("/:class_id", async (req, res, next) => {
    try {
      const { class_id } = req.params
      const students = await studentsModel.findByClass(class_id)
  
      if (students && class_id < 13 ) {
        res.json(students)
      } else {
        res.status(404).json({
          message: "Can't find this class",
        })
      }
    } catch(err) {
      next(err)
    }
  })

module.exports = router