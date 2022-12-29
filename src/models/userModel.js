const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  refreshtoken: {
    type: String,
  },
});

// when we create model with mongoose they come automatically with some static methods like find
// we can make our own satic method

// static signup method
userSchema.statics.signup = async function (username, email, password) {
  // this: refers to the model

  // we verify if the email exists in the database
  const emailExists = await this.findOne({ email });

  // we throw errors as we can use the http response from model
  // then we catch them in the controller
  if (emailExists) {
    throw Error("Email already in use");
  }

  // we verify if the username exists in the database
  const usernameExists = await this.findOne({ username });

  if (usernameExists) {
    throw Error("Username already in use");
  }

  // salt helps us to increase the level of protection of the hash
  // by default the length is 10
  // we need to find balance between user experience and security
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, email, password: hash });

  return user;
};

// static login method
userSchema.statics.login = async function (username, password) {
  if (!username || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ username });
  if (!user) {
    throw Error("Incorrect username");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

// static update refreshtoken method
userSchema.statics.updateRefreshToken = async function (_id, refreshtoken) {
  await this.findByIdAndUpdate(
    _id,
    { refreshtoken: refreshtoken },
    { new: true }
  );
};

module.exports = model("User", userSchema);
