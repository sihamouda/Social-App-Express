const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createAccToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWTACCTOKENSECRET, { expiresIn: "2m" });
};

module.exports = { createAccToken };
