const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createAccToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWTACCTOKENSECRET, { expiresIn: "2m" });
};

const accessTokenAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  // console.log(authorization);
  // authorization should be in this format : "Bearer token"
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWTACCTOKENSECRET);
    console.log(_id);
    const user = await User.findOne({ _id }).select("refreshtoken");
    if (user.refreshtoken === "") {
      throw "old access token";
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = { createAccToken, accessTokenAuth };
