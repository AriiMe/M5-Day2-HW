const express = require("express")
const cors = require("cors")
const server = express()
const usersRoutes = require("./users")

server.use(cors())

const port = 3001

server.use(express.json())


server.use("/students", usersRoutes)
server.listen(port, () => {
  console.log("Server Running on port: ", port)
})
