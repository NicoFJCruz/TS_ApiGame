const S = require("sequelize");
const db = require("../db");

class Video extends S.Model {}

Video.init(
  {
    title: { type: S.STRING},
    link: { type: S.STRING },
  },
  { sequelize: db, modelName: "videos"},
  { timestamps: false },
);

module.exports = Video;
