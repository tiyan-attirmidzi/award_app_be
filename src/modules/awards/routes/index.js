const router = require("express").Router();
const multer = require("multer");

const { getAwards } = require("../handlers");
const { authorize } = require("../../../middlewares/authentication");
const { inputValidation } = require("../../../middlewares/form-validation");
const Joi = require("joi");

router.get(
  "/awards",
  [
    multer().none(),
    authorize(),
    inputValidation({
      query: Joi.object({
        page: Joi.number(),
        page_size: Joi.number(),
        type: Joi.string().allow(null, ""),
        min_point: Joi.number(),
        max_point: Joi.number(),
      }),
    }),
  ],
  getAwards
);

module.exports = router;
