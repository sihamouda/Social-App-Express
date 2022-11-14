var express = require("express");
var app = express();

app.get("/api", function (req, res) {
  res.json({ test: "test" });
});

app.listen(3030);
