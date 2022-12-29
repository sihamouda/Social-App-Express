const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const { createAccToken } = require("../auth/accessTokenAuth");

const createRefreshToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWTREFRESHTOKENSECRET, {
    expiresIn: "1d",
  });
};

const refreshTokenAuth = async (req, res) => {
  // verify user is authenticated
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  // console.log(authorization);
  // authorization should be in this format : "Bearer token"
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWTREFRESHTOKENSECRET);

    req.user = await User.findOne({ _id }).select("_id");

    // create an Access Token
    const acctoken = createAccToken(_id);
    // create a Refresh Token
    const refreshToken = createRefreshToken(_id);
    res.status(200).json({ acctoken, refreshToken });
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = { createRefreshToken, refreshTokenAuth };
