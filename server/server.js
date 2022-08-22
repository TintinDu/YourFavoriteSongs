const express = require("express")
const app = require("../api/app")

app.listen(3000, () => {
  console.log("app listening on port 3000")
})

app.use(express.json())
