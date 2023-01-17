const Blog = require("../models/blogModel");

const addBlog = async (req, res) => {
  const { title, body } = req.body;

  try {
    const blog = await Blog.create({ title, body });
    res.status(200).json({ status: "succesfull" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const listBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addBlog, listBlogs };
