// import Router
const axios = require("axios");
const { Router } = require("express");
const router = Router();

// to route all api calls to services

router.post("/:service/:apiName", (req, res) => {
  res.send("ok");

  // axios
  //   .post(
  //     "http://localhost:4001/api/" +
  //       req.params.service +
  //       "/" +
  //       req.params.apiName,
  //     req.body,
  //     {
  //       headers: req.headers,
  //     }
  //   )
  //   .then((response) => {
  //     res.send(response.data);
  //   });
});

// router.get("/:service/:apiName", (req, res) => {
// console.log(req.params);

// to pass it to axios cause it containes tokens
// const config = {
//   headers: req.headers,
// };

// console.log(config);

//   axios
//     .get(
//       "http://localhost:4001/api/" +
//         req.params.service +
//         "/" +
//         req.params.apiName,
//       config
//     )
//     .then((response) => {
//       res.send(response.data);
//     });
// });

module.exports = router;
