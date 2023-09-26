const S = require("sequelize");
const db = require("../db");

class Image extends S.Model {}

Image.init(
  {
    link: { type: S.STRING },
  },
  { sequelize: db, modelName: "images", timestamps: false }
);

module.exports = Image;
