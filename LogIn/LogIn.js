var express = require("express");
var login = express.Router();

// var vald = require("./services/validation");

login.use(express.json());

login.post("/api", function (req, res) {
  let loginInput = req.body;
  console.log(loginInput);

  res.status(201).json({
    status: "OK",
  });
});

//export this router to use in our index.js
module.exports = login;
