const express = require("express");
const songRouter = require("./Songs");
//const familyRouter = require("./Families")
//const accountRouter = require("./Accounts")
const router = express.Router();

router.use("/songs", songRouter);

module.exports = router;
