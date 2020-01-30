const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const server = express()
const port = process.env.PORT || 5000

server.use(helmet())
server.use(cors())
server.use(express.json())


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
  console.log(`\n** Running on http://localhost:${port} **\n`)
})