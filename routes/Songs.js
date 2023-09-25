const express = require("express");
const songRouter = express.Router();
const { songsAll, songOne } = require("../controllers/songs");

songRouter.get("/", songsAll);
songRouter.get("/:id", songOne);

module.exports = songRouter;
