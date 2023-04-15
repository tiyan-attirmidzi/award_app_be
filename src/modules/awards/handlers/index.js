const { responseJsonCustom } = require("../../../utils/response");

const getAwards = async (req, res, next) => {
  try {
    return responseJsonCustom(
      res,
      true,
      "Awards Retrieved Successfully.",
      null,
      200
    );
  } catch (error) {
    return responseJsonCustom(
      res,
      false,
      `${error.name}: ${error.message}`,
      null,
      error.statusCode || 400
    );
  }
};

module.exports = {
  getAwards,
};
