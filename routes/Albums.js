const express = require("express");
const albumRouter = express.Router();
const { albumsAll, albumOne } = require("../controllers/albums");

albumRouter.get("/", albumsAll);
albumRouter.get("/:id", albumOne);

module.exports = albumRouter;
