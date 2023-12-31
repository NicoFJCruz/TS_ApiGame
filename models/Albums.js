const S = require("sequelize");
const db = require("../db");

class Album extends S.Model {}

Album.init(
  {
    title: { type: S.STRING, allowNull: false },
    link: { type: S.STRING },
    release_date: { type: S.STRING },
    color: { type: S.STRING },
  },
  { sequelize: db, modelName: "albums", timestamps: false }
);

module.exports = Album;
