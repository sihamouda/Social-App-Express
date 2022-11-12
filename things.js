var express = require("express");
var router = express.Router();

router.get("/:id([0-9]{5})", function (req, res) {
  res.send("id: " + req.params.id);
});
router.post("/", function (req, res) {
  res.send("POST route on things.");
});

//export this router to use in our index.js
module.exports = router;
