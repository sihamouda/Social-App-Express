var express = require("express");

var app = express();

var signup = require("./SignUp/SignUp.js");

app.use("/SignUp", signup);

app.listen(3030);
