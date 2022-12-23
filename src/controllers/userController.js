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

    res.status(200).json({ status: succesfull });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// export controllers
module.exports = { signupUser, loginUser };
