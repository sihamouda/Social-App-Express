// import Router

const { Router } = require("express");
const router = Router();

// to route all api calls to services

router.post("/:service/:apiName", (req, res) => {
  res.send("ok");

});

module.exports = router;
