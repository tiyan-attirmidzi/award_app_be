const jwt = require("jsonwebtoken");
const { raw } = require("objection");
const UserModel = require("../../../models/user.model");
const { responseJsonCustom } = require("../../../utils/response");
const { appJwtKey, appJwtExp } = require("../../../configs/app");

const authSignIn = async (req, res, next) => {
  try {
    let user = await UserModel.query()
      .where(raw(`lower(email) = lower('${req.body.email}')`))
      .first();

    if (!user) {
      return responseJsonCustom(
        res,
        false,
        "Email not found, your email is incorrect or you're not registered.",
        null,
        404
      );
    }

    const token = jwt.sign({ user }, appJwtKey, {
      expiresIn: appJwtExp,
    });

    return responseJsonCustom(
      res,
      true,
      "User Signed In Successfully.",
      { user, token },
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
  authSignIn,
};
