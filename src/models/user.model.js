const { Model } = require("objection");

class UserModel extends Model {
  static get tableName() {
    return "users";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["fullname", "email"],
      properties: {
        id: {
          type: "integer",
        },
        fullname: {
          type: "string",
        },
        email: {
          type: "string",
        },
      },
    };
  }
}

module.exports = UserModel;
