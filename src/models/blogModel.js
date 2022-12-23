const { Schema, model } = require("mongoose");

var blogSchema = new Schema({
  title: String,
  body: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Blog", blogSchema);
