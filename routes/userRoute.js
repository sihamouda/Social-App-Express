// import Router
const { Router } = require("express");

// create Router
const router = Router();

// importing Controllers
const { loginUser, signupUser } = require("../controllers/userController");

// signup route
router.post("/signup", signupUser);

// login route
router.post("/login", loginUser);

// exporting routes
module.exports = router;
