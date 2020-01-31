const express = require("express")
const usersModel = require("./user_auth-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const users = await usersModel.find()
    console.log(users)
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post("/register", async (req, res, next) => {
    try {
      const saved = await usersModel.add(req.body)
      
      res.status(201).json(saved)
    } catch (err) {
      next(err)
    }
})
  
router.post("/login", async (req, res, next) => {
    try {
        const { username, password } = req.body
        const user = await usersModel.findBy({ username }).first()
      
        if (user && password === user.password) {
            
          res.status(200).json({
            message: `Welcome ${user.username}!`
          })
        } else {
          res.status(401).json({
            message: "Invalid Credentials",
          })
        }
      } catch (err) {
        next(err)
    }
})

module.exports = router