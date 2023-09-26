const S = require("sequelize");
const db = require("../db");

class Lyric extends S.Model {}

Lyric.init(
  {
    text: { type: S.STRING },
    songOrder: { type: S.INTEGER },
  },
  { sequelize: db, modelName: "lyrics", timestamps: false }
);

module.exports = Lyric;
