//import express
var express = require("express");

//create application
var app = express();

//import routes
var things = require("./things.js");

//both index.js and things.js should be in same directory
app.use("/things", things);

app.get("/:id", function (req, res) {
  res.send("id: " + req.params.id);
});

app.listen(3000);
