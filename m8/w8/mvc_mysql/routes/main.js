const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
/** 회원가입 */
router.get("/signup", controller.signup); // 회원가입 페이지 열기
router.post("/signup", controller.post_signup); // 데이터베이스에 회원정보 저장

/** 로그인 */
router.get("/signin", controller.signin); // 로그인 페이지 열기
router.post("/signin", controller.post_signin); // 데이터베이스에서 유저 정보 조회하여 로그인 진행

/** 회원정보 */
router.get("/profile/:userid", controller.profile); // 회원정보 조회
router.patch("/profile", controller.patch_profile); // 회원정보 수정

module.exports = router;
