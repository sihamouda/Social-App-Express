const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const { createAccToken } = require("../auth/accessTokenAuth");

const { createRefreshToken } = require("../auth/refreshTokenAuth");

// login a user
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);

    // create an Access Token
    const acctoken = createAccToken(user._id);
    // create a Refresh Token
    const refreshToken = createRefreshToken(user._id);

    await User.updateRefreshToken(user._id, refreshToken);

    res.status(200).json({ acctoken, refreshToken });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a user
const signupUser = async (req, res) => {
  const { username, email, password } = req.body;
  // console.log(req.body);
  try {
    const user = await User.signup(username, email, password);

    res.status(200).json({ status: "succesfull" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const accessTokenAuth = async (req, res) => {
  // verify user is authenticated
  const { authorization } = req.body;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  // authorization should be in this format : "Bearer token"
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWTACCTOKENSECRET);
    console.log(_id);
    const user = await User.findOne({ _id }).select("refreshtoken");
    if (user.refreshtoken === "") {
      throw "old access token";
    }
    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

const refreshTokenAuth = async (req, res) => {
  // verify user is authenticated
  const { authorization } = req.body;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

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

// export controllers
module.exports = { signupUser, loginUser, accessTokenAuth, refreshTokenAuth };
