const AwardModel = require("../../../models/award.model");
const { responseJsonCustom } = require("../../../utils/response");
const { paginations } = require("../../../utils/pagination");

const getAwards = async (req, res, next) => {
  try {
    const {
      page = 1,
      page_size = 4,
      type,
      min_point = 0,
      max_point = 99999999,
    } = req.query;

    const awards = await AwardModel.query()
      .where(function () {
        this.where("exchange_points", ">=", min_point).andWhere(
          "exchange_points",
          "<=",
          max_point
        );
      })
      .modify("awardTypes", type)
      .orderBy("name", "ASC")
      .page(page - 1, page_size);

    const response = {
      data: awards,
      pagination: paginations(awards.total, page_size, page, "/awards"),
    };

    return responseJsonCustom(
      res,
      true,
      "Awards Retrieved Successfully.",
      response,
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
