// login a user
const loginUser = async (req, res) => {
  res.json({ msg: "login user" });
};

// signup a user
const signupUser = async (req, res) => {
  res.json({ msg: "signup user" });
};

// export controllers
module.exports = { signupUser, loginUser };
