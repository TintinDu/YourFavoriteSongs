const express = require("express")
const app = ("./app")
const cors = require("cors")

app.use(cors())

app.listen(3000, () => {
  console.log("app listening on port 3000")
})
