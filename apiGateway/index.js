// import and create express
const express = require("express");
const app = express();

require("dotenv").config();

// importing Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument,{
  explorer: true,
  customCssUrl:
    "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
}));

// middleware bodyParser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// middleware: morgan for logging
const { setupLogging } = require("./middlewares/logs");
setupLogging(app);

// api auth
const { auth } = require("./routes/auth");
app.use("/api/auth", auth);

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
