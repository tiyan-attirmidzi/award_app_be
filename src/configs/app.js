const { dbConnection } = require("./database");

require("dotenv").config();

module.exports = {
  appEnv: process.env.ENV,
  appHost: process.env.APP_HOST,
  appPort: process.env.APP_PORT,
  appJwtKey: process.env.APP_JWT_KEY,
  appJwtExp: process.env.APP_JWT_EXP,
  database: {
    knexfile: {
      development: {
        client: process.env.DB_CONNECTION,
        connection: dbConnection,
        searchPath: ["public"],
        migrations: {
          tableName: "knex_migrations",
          directory: "./src/database/migrations",
        },
        seeds: {
          directory: "./src/database/seeds",
        },
        pool: {
          min: 1,
          max: 30,
          idleTimeoutMillis: 360000 * 1000,
        },
        debug: true,
      },
      test: {
        client: process.env.DB_CONNECTION,
        connection: dbConnection,
        searchPath: ["public"],
        useNullAsDefault: true,
        pool: {
          min: 1,
          max: 1,
          idleTimeoutMillis: 360000 * 1000,
        },
        migrations: {
          directory: "./src/database/migrations",
        },
        seeds: {
          directory: "./src/database/seeds",
        },
      },
      staging: {
        client: process.env.DB_CONNECTION,
        connection: dbConnection,
        searchPath: ["public"],
        pool: {
          min: 2,
          max: 10,
        },
        migrations: {
          tableName: "knex_migrations",
        },
      },
      production: {
        client: process.env.DB_CONNECTION,
        connection: dbConnection,
        searchPath: ["public"],
        migrations: {
          tableName: "knex_migrations",
        },
        debug: true,
      },
    },
  },
};
