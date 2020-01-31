const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const dotenv = require("dotenv")

const usersRouter = require("./api/users_auth/user_auth-router")

dotenv.config()

const server = express()
const host = process.env.HOST || "0.0.0.0"
const port = process.env.PORT || 5000

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use("/api/users", usersRouter)

server.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to 'International School Social Worker'",
  })
})

server.use((err, req, res, next) => {
  console.log("Error:", err)

  res.status(500).json({
    message: "Something went wrong",
  })
})


server.listen(port, () => {
  console.log(`\n** Running on http://${host}:${port} **\n`)
})