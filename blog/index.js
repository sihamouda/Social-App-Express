// import and create express
const express = require("express");
const app = express();

// import ODM mongoose
const mongoose = require("mongoose");

require("dotenv").config();

// middleware
app.use(express.json());

// middleware: morgan for logging
const { setupLogging } = require("./middlewares/logs");
setupLogging(app);

// importing Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument,{
  explorer: true,
  customCssUrl:
    "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
}));


// importing routes
const blogRoutes = require("./routes/blogRoute");

// using routes
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
