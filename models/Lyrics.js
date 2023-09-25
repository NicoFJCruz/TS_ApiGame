const S = require("sequelize");
const db = require("../db");

class Lyric extends S.Model {}

Lyric.init(
  {
    text: { type: S.STRING },
  },
  { sequelize: db, modelName: "lyrics" },
  { timestamps: false },
);

module.exports = Lyric;
