// import Router
const { Router } = require("express");
const router = Router();

const request = require("request");
const { getAPI } = require("../services/parse");
const { accesstoken } = require("../controllers/auth");

// to route all api calls to services

router.all("/:service/:endpoint", (req, res) => {
  let ress
  accesstoken(req, ress);
  
  const service = req.params.service;
  const endpoint = req.params.endpoint;
  
  
  const options = {
    url: getAPI(service + "-service", endpoint)[0],
    method: getAPI(service + "-service", endpoint)[1],
    json: req.body,
  };
  console.log(options.method)
 
  request(options, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.json(body);
    } else {
      res.status(response.statusCode).json(error);
    }
  });
});

module.exports = router;
