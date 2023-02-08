// import Router
const { Router } = require("express");

// create Router
const router = Router();

// importing Controllers
const {
  signupUser,
  loginUser,
  accessTokenAuth,
  refreshTokenAuth,
} = require("../controllers/userController");



// signup route
router.post("/signup", signupUser);

// login route
router.post("/login", loginUser);

// access token route
router.get("/accesstoken", accessTokenAuth);

// refresh token route
router.get("/refreshtoken", refreshTokenAuth);

// exporting routes
module.exports = router;
