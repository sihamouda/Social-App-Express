// import and create express
const express = require("express");
const app = express();

// import ODM mongoose
const mongoose = require("mongoose");

require("dotenv").config();

// middleware
app.use(express.json());

// for logging
app.use((req, res, next) => {
  // time
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const activityLog = {
    RequestURL: req.originalUrl,
    headers: req.headers,
    RequestMethod: req.method,
    Time: today.toUTCString(),
  };

  console.log(activityLog);

  next();
});

// importing routes
const userRoutes = require("./routes/userRoute");
const blogRoutes = require("./routes/blogRoute");

// using routes
app.use("/api/auth", userRoutes);
app.use("/api/blogs", blogRoutes);

// connect to db then starting app
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
