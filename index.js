// import and create express
const express = require("express");
const app = express();

// import ODM mongoose
const mongoose = require("mongoose");

require("dotenv").config();

// middleware
app.use(express.json());

// importing routes
const userRoutes = require("./routes/userRoute");

// using routes
app.use("/api/user", userRoutes);

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
