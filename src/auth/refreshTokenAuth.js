const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const { createAccToken } = require("../auth/accessTokenAuth");

const createRefreshToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWTREFRESHTOKENSECRET, {
    expiresIn: "5m",
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

    const user = await User.findOne({ _id }).select("refreshtoken");

    if (token !== user.refreshtoken) {
      await User.updateRefreshToken(user._id, "");
      throw "old refresh token";
    }

    // create an Access Token
    const acctoken = createAccToken(_id);
    // create a Refresh Token
    const refreshToken = createRefreshToken(_id);

    await User.updateRefreshToken(_id, refreshToken);
    res.status(200).json({ acctoken, refreshToken });
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = { createRefreshToken, refreshTokenAuth };
