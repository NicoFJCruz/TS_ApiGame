const db = require("../db");
const Songs = require("./Songs");
const Albums = require("./Albums");
const Images = require("./Images");
const Lyrics = require("./Lyrics");
const Videos = require("./Videos");

//Relation Songs - Lyrics
Songs.hasMany(Lyrics);
Lyrics.belongsTo(Songs);

//Relation Songs - Videos
Songs.hasMany(Videos);
Videos.belongsTo(Songs);

//Relation Albums - Songs
Albums.hasMany(Songs);
Songs.belongsTo(Albums);

//Relation Albums - Images
Albums.hasMany(Images);
Images.belongsTo(Albums);

module.exports = {
  Songs,
  Albums,
  Images,
  Lyrics,
  Videos,
};
