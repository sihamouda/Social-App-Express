// import Router
const { Router } = require("express");

// create Router
const router = Router();

// importing Controllers
const { addBlog, listBlogs } = require("../controllers/blogController");

router.post("/add", addBlog);

router.get("/list", listBlogs);

// exporting routes
module.exports = router;
