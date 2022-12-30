const logs = (req, res, next) => {
  // time
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const activityLog = {
    RequestURL: req.originalUrl,
    RequestMethod: req.method,
    Time: today.toUTCString(),
  };

  console.log(activityLog);

  next();
};

module.exports = { logs };
