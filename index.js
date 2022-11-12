// import express
var express = require("express");

// create application
var app = express();

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.listen(3000);
