const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

createRefreshToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWTREFRESHTOKENSECRET, {
    expiresIn: "3m",
  });
};

module.exports = { createRefreshToken };
