const User = require("../models/userModel");

// login a user
const loginUser = async (req, res) => {
  res.json({ msg: "login user" });
};

// signup a user
const signupUser = async (req, res) => {
  const { username, email, password } = req.body;
  // console.log(req.body);
  try {
    const user = await User.signup(username, email, password);

    res.status(200).json({ username, email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// export controllers
module.exports = { signupUser, loginUser };
