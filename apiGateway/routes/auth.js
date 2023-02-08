const { Router } = require("express");

const auth = Router();

const {
  signup,
  login,
  accesstoken,
  refreshtoken,
} = require("../controllers/auth");

auth.post("/signup", signup);

auth.post("/login", login);

auth.get("/accesstoken", accesstoken);

auth.get("/refreshtoken", refreshtoken);

module.exports = { auth };
