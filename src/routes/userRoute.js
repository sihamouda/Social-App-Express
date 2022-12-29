// import Router
const { Router } = require("express");

// create Router
const router = Router();

// importing Controllers
const { loginUser, signupUser } = require("../controllers/userController");
const { refreshTokenAuth } = require("../auth/refreshTokenAuth");

// signup route
router.post("/signup", signupUser);

// login route
router.post("/login", loginUser);

// refresh token route
router.post("/refreshtoken", refreshTokenAuth);

// exporting routes
module.exports = router;
