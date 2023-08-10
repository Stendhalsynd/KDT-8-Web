// const express = require("express");
// const controller = require("../controller/Cvisitor");

// import express from "express";
// import {
//   getUsers,
//   main,
//   getSignup,
//   setSignup,
//   getSignin,
//   setSignin,
//   getProfile,
//   editProfile,
//   deleteProfile,
//   // getVisitors,
//   // getVisitor,
//   // addVisitor,
//   // editVisitor,
//   // deleteVisitor,
// } from "../controller/Cuser.js";

const express = require("express");
const {
  getUsers,
  getUser,
  main,
  getSignup,
  setSignup,
  getSignin,
  setSignin,
  getProfile,
  editProfile,
  deleteProfile,
  getSequelizeSignup,
  setSequelizeSignup,
  getSequelizeUser,
  editSequelizeUser,
  deleteSequelizeUser,
} = require("../controller/Cuser.js");

const router = express.Router();

/** sequelize */

router.get("/sequelize", getUsers);
router.get("/sequelize/one", getUser);

router.get("/sequelize/signup", getSequelizeSignup); // GET /sequelize/signup
router.post("/sequelize/signup", setSequelizeSignup); // POST /sequelize/signup

router.get("/sequelize/user/:id", getSequelizeUser); // GET /sequelize/user/:id

router.post("/sequelize/user/:id/edit", editSequelizeUser); // POST /sequelize/user/:id/edit

router.post("/sequelize/user/:id/delete", deleteSequelizeUser); // DELETE /sequelize/user/:id/delete

///////////

// localhost:PORT/
router.get("/user", main); // GET /user
router.get("/user/signup", getSignup); // GET /user/signup
router.post("/user/signup", setSignup); // POST /user/signup
router.get("/user/signin", getSignin); // GET /user/singin
router.post("/user/signin", setSignin); // POST /user/singin
router.get("/user/profile", getProfile); // POST /user/profile
router.post("/user/profile/edit", editProfile); // GET / user/profile/eidt
router.delete("/user/profile/delete", deleteProfile); // DELETE / user/profile/delete
// router.get("/visitor", getVisitors); // GET /comments
// router.get("/visitor/get", getVisitor); // GET /comment/
// router.post("/visitor/write", addVisitor); // POST /comment
// router.patch("/visitor/edit", editVisitor); // PATCH /comment
// router.delete("/visitor/delete", deleteVisitor); // DELETE /comment/

// export default router;

module.exports = router;
