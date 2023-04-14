const responseJsonCustom = (res, isSuccess, message, data, statusCode) => {
  const resp = {};

  resp.success = isSuccess;
  resp.status_code = statusCode;
  resp.message = message;

  if (data) {
    resp.data = data;
  }

  return res.status(statusCode).json(resp);
};

module.exports = {
  responseJsonCustom,
};
