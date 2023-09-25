const S = require("sequelize");
const db = require("../db");

class Lyric extends S.Model {}

Lyric.init(
  {
    link: { type: S.STRING },
  },
  { sequelize: db, modelName: "lyrics" }
);

module.exports = Lyric;
