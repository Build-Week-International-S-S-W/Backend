const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const usersRouter = require("./api/users_auth/user_auth-router")
const studentsRouter = require("./api/students/students-router")
const restricted = require("./api/users_auth/authenticate-middleware")

const server = express()
const host = process.env.HOST || "0.0.0.0"
const port = process.env.PORT || 5000

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use("/api/users", usersRouter)
server.use("/api/students", restricted(), studentsRouter)

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

if (!module.parent){
  server.listen(port, host, () => {
    console.log(`\n** Running on http://${host}:${port} **\n`)
  })
}

module.exports = server;