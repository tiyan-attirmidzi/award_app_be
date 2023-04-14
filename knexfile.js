const config = require("./src/configs/app");

module.exports = {
  ...config.database.knexfile,
};
