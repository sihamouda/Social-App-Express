const request = require("request");
const { getAPI } = require("../services/parse");

const signup = (req, res) => {
  const options = {
    url: getAPI("users-service", "signup")[0],
    method: getAPI("users-service", "signup")[1],
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
  const options = {
    url: getAPI("users-service", "login")[0],
    method: getAPI("users-service", "login")[1],
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

const accesstoken = (req, res) => {
  const options = {
    url: getAPI("users-service", "accesstoken")[0],
    method: "GET",
    headers: req.headers,
  };

  request(options, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.json(body);
    } else {
      res.status(response.statusCode).json(error);
    }
  });
};

const refreshtoken = (req, res) => {
  const options = {
    url: getAPI("users-service", "refreshtoken")[0],
    method: "GET",
    json: req.headers,
  };

  request(options, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.json(body);
    } else {
      res.status(response.statusCode).json(error);
    }
  });
};

module.exports = { signup, login, accesstoken, refreshtoken };
