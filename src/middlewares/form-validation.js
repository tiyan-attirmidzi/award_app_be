const { responseJsonCustom } = require("../utils/response");

const inputValidation = (schema) => {
  return (req, res, next) => {
    const keys = Object.keys(schema);
    for (let i = 0; i < keys.length; i++) {
      const { error } = schema[keys[i]].validate(req[keys[i]]);
      const valid = error == null;
      if (!valid) {
        const { details } = error;
        const message = details.map((i) => i.message).join(",");
        return responseJsonCustom(res, false, "Invalid Data", message, 422);
      }
    }
    next();
  };
};

module.exports = {
  inputValidation,
};
