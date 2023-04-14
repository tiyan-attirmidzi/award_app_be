const knex = require("knex");
const knexfile = require("../../knexfile");
const { Model } = require("objection");
const { appEnv } = require("../configs/app");

function initDatabase() {
  Model.knex(knex(knexfile[appEnv]));
}

module.exports = initDatabase;
