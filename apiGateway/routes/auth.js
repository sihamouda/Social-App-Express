const { Router } = require("express");

const auth = Router();

const { signup, login } = require("../controllers/auth");

auth.post("/signup", signup);

auth.post("/login", login);

module.exports = { auth };
