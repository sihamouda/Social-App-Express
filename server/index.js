var express = require("express");

var app = express();

var signup = require("./SignUp/SignUp.js");
var login = require("./LogIn/LogIn.js");

app.use("/SignUp", signup);

app.use("/LogIn", login);

app.listen(3030);
