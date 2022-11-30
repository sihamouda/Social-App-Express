var express = require("express");
var signup = express.Router();

var vald = require("./services/validation");

signup.use(express.json());

signup.post("/api", function (req, res) {
  signupInput = req.body;
  console.log(signupInput);

  if (vald.validation(signupInput)) {
    res.status(201).json({
      status: "OK",
    });
  } else {
    res.status(403).json({
      status: "bad password",
    });
  }
});

//export this router to use in our index.js
module.exports = signup;
