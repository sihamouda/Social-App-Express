// import Router
const { Router } = require("express");

// create Router
const router = Router();

const { accessTokenAuth } = require("../auth/accessTokenAuth");

// importing Controllers
const { addBlog, listBlogs } = require("../controllers/blogController");

router.use(accessTokenAuth);

router.post("/add", addBlog);

router.get("/list", listBlogs);

// exporting routes
module.exports = router;
