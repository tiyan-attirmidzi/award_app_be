const { Model } = require("objection");

class AwardModel extends Model {
  static get tableName() {
    return "awards";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "exchange_points", "type", "image"],
      properties: {
        id: {
          type: "integer",
        },
        name: {
          type: "string",
        },
        exchange_points: {
          type: "integer",
        },
        type: {
          type: "string",
        },
        image: {
          type: "string",
        },
      },
    };
  }

  static get modifiers() {
    return {
      awardTypes(query, types) {
        if (types) {
          let splits = types.split(", ");
          console.log(splits);
          let arr = [];
          for (let i = 0; i < splits.length; i++) {
            let convert = splits[i].toString();
            arr.push(convert);
          }
          console.log(arr);
          query.where(function () {
            this.whereIn("awards.type", arr);
          });
        }
      },
    };
  }
}

module.exports = AwardModel;
