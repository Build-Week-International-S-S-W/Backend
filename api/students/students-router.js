const express = require("express")
const studentsModel = require("./students-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const students = await studentsModel.find()
    res.status(200).json(students)
  } catch (err) {
    next(err)
  }
})

router.get("/classes/:class_id", async (req, res, next) => {
    try {
      const { class_id } = req.params
      const students = await studentsModel.findByClass(class_id)
  
      if (students && class_id < 13 ) {
        res.status(200).json(students)
      } else {
        res.status(404).json({
          message: "Can't find this class",
        })
      }
    } catch(err) {
      next(err)
    }
})

router.get("/grades/:grade_id", async (req, res, next) => {
    try {
      const { grade_id } = req.params
      const students = await studentsModel.findByGrade(grade_id)
  
      if (students && grade_id < 4 ) {
        res.status(200).json(students)
      } else {
        res.status(404).json({
          message: "Can't find this grade",
        })
      }
    } catch(err) {
      next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params
      const student = await studentsModel.findById(id)
  
      if (student) {
        res.status(200).json(student)
      } else {
        res.status(404).json({
          message: "Could not find student with given ID",
        })
      }
    } catch(err) {
      next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
      const newStudent = await studentsModel.add(req.body)
      res.status(201).json(newStudent)
    } catch(err) {
      next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
      const { id } = req.params
      const student = await studentsModel.update(id, req.body)
  
      if (student) {
        res.status(200).json(student)
      } else {
        res.status(404).json({
          message: "Could not find student with given ID",
        })
      }
    } catch(err) {
      next(err)
    }
})
  
router.delete("/:id", async (req, res, next) => {
    try {
      const { id } = req.params
      const deletedCount = await studentsModel.remove(id)
  
      if (deletedCount) {
        res.status(204).end()
      } else {
        res.status(404).json({
          message: "Could not find user with given ID",
        })
      }
    } catch(err) {
      next(err)
    }
})  

module.exports = router