const express = require("express");
const router = express.Router();
const controller = require("../controllers/Cuser");

router.get("/", controller.index);
router.get("/login", controller.get_login);
router.post("/login", controller.post_login);
router.get("/signup", controller.get_signup);
router.post("/signup", controller.post_signup);
router.get("/profile", controller.get_profile);

module.exports = router;
