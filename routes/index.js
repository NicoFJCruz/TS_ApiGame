const express = require("express");
const songRouter = require("./Songs");
const albumRouter = require("./Albums")
//const accountRouter = require("./Accounts")
const router = express.Router();

router.use("/songs", songRouter);
router.use("/albums", songRouter);

module.exports = router;
