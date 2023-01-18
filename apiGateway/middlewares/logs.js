const morgan = require("morgan");

const setupLogging = (app) => {
  app.use(
    morgan(
      ":remote-addr :method :url HTTP/:http-version :status :res[content-length] :response-time ms"
    )
  );
};

exports.setupLogging = setupLogging;
