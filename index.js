//import express
var express = require("express");

//create application
var app = express();

//import Pug
app.set("view engine", "pug");
app.set("views", "./views");

//import routes
var things = require("./things.js");

//both index.js and things.js should be in same directory
app.use("/things", things);

//dynamic routes
// app.get("/:id", function (req, res) {
//   res.send("id: " + req.params.id);
// });

//middleware
app.use("/", function (req, res, next) {
  console.log("A request for things received at " + Date.now());
  next();
});

app.get("/", function (req, res) {
  res.send("hello");
});

//Pug template for specific route
app.get("/first_template", function (req, res) {
  res.render("first_view", {
    name: "Anis",
  });
});

app.listen(3000);
