// import and create express
const express = require("express");
const app = express();

require("dotenv").config();

// middleware
app.use(express.json());

// middleware: morgan for logging
const { setupLogging } = require("./middlewares/logs");
setupLogging(app);

// api router
const router = require("./routes/router");
app.use("/api", router);

// welcome page: testing reasons
app.get("/", (req, res) => {
  res.send("welcome");
});

// start app
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
