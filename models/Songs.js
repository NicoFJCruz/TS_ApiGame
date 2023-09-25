const S = require("sequelize");
const db = require("../db");

class Song extends S.Model {}

Song.init(
  {
    title: { type: S.STRING, allowNull: false },
    length: { type: S.STRING },
    link: { type: S.STRING },
  },
  { sequelize: db, modelName: "songs" },
  { timestamps: false },
);

module.exports = Song;
