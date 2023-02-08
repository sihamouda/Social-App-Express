const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const { createAccToken } = require("./accessTokenAuth");

const createRefreshToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWTREFRESHTOKENSECRET, {
    expiresIn: "5m",
  });
};

module.exports = { createRefreshToken };
