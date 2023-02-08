const getAPI = (serviceName, apiName) => {
  try {
    const registry = require("./registry.json");

    const services = registry["services"];

    const serviceMatch = services.find(
      (service) => service.name === serviceName
    );

    if (serviceMatch === undefined) {
      throw {
        name: "service",
        message: "there is no " + serviceName + " in services registry",
      };
    }

    const apis = serviceMatch["api"];

    const apiMatch = apis.find((api) => api.name === apiName);

    if (apiMatch === undefined) {
      throw {
        name: "api",
        message: "there is no " + apiName + " in services apis",
      };
    }

    return [serviceMatch["url"] + apiMatch["uri"], apiMatch["method"]];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAPI };
