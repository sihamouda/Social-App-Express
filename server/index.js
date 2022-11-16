var express = require("express");
// var bodyParser = require("body-parser");
// var multer = require("multer");
// var upload = multer();
var app = express();

// // parse application/json
// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(upload.array());

app.use(express.json());

app.post("/SignInApi", function (req, res) {
  // let data = req.body.username;
  console.log(req.body);
  res.status(201).json({
    status: "OK",
  });
});

app.listen(3030);
