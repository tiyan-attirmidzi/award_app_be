/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("awards", function (table) {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
    table.bigInteger("exchange_points").notNullable();
    table.enu("type", ["Giftcard", "Products", "Vouchers"]).notNullable();
    table.text("image").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("awards");
};
