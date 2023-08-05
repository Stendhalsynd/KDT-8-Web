const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// localhost:PORT/
router.get("/", controller.main); // GET /
router.get("/visitor", controller.getVisitors); // GET /comments

module.exports = router;
