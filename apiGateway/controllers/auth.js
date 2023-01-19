const request = require("request");
const registry = require("../registry.json");

const signup = (req, res) => {
  const auth = registry["services"][0];

  console.log(auth["url"] + auth["api"][0]["uri"], auth["api"][0]["method"]);
  const options = {
    url: auth["url"] + auth["api"][0]["uri"],
    method: auth["api"][0]["method"],
    json: req.body,
  };

  request(options, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.json(body);
    } else {
      res.status(response.statusCode).json(error);
    }
  });
};

const login = (req, res) => {
  const auth = registry["services"][0];

  console.log(auth["url"] + auth["api"][0]["uri"], auth["api"][0]["method"]);
  const options = {
    url: auth["url"] + auth["api"][1]["uri"],
    method: auth["api"][0]["method"],
    json: req.body,
  };

  request(options, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.json(body);
    } else {
      res.status(response.statusCode).json(error);
    }
  });
};

module.exports = { signup, login };
