const jwt = require("jsonwebtoken");
const { appJwtKey } = require("../configs/app");
const UserModel = require("../models/user.model");
const { responseJsonCustom } = require("../utils/response");

function getToken(req) {
  let token = req.headers.authorization
    ? req.headers.authorization.replace("Bearer ", "")
    : null;
  return token && token.length ? token : null;
}

function authorize() {
  return async function (req, res, next) {
    try {
      let token = getToken(req);
      if (!token) {
        return responseJsonCustom(
          res,
          false,
          "Need Authentication.",
          null,
          401
        );
      }

      req.user = jwt.verify(token, appJwtKey);

      let user = await UserModel.query().findOne({
        email: req.user.user.email,
      });

      if (!user) {
        return responseJsonCustom(
          res,
          false,
          "Sorry, You're Unauthorized or Token Expired.",
          null,
          401
        );
      }

      next();
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
}

module.exports = {
  authorize,
};
