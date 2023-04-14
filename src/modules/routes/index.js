const router = require("express").Router();
const Joi = require("joi");
const multer = require("multer");

const { inputValidation } = require("../../middlewares/form-validation");
const { authSignIn } = require("../handlers");

router.post(
  "/auth/signin",
  [
    multer().none(),
    inputValidation({
      body: Joi.object({
        email: Joi.string().required(),
      }),
    }),
  ],
  authSignIn
);

module.exports = router;
