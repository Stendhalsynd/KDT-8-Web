const express = require("express");
const router = express.Router();
const controller = require("../controller/Cstudent");

router.get("/", controller.index);
router.post("/student", controller.post_student);
router.post("/course", controller.post_course);
router.get("/student", controller.get_student);

module.exports = router;
