// const express = require("express");
// const controller = require("../controller/Cvisitor");
import express from "express";
import {
  main,
  getSignup,
  setSignup,
  getSignin,
  setSignin,
  getProfile,
  // getVisitors,
  // getVisitor,
  // addVisitor,
  // editVisitor,
  // deleteVisitor,
} from "../controller/Cuser.js";
const router = express.Router();

// localhost:PORT/
router.get("/user", main); // GET /user
router.get("/user/signup", getSignup); // GET /user/signup
router.post("/user/signup", setSignup); // POST /user/signup
router.get("/user/signin", getSignin); // GET /user/singin
router.post("/user/signin", setSignin); // POST /user/singin
router.get("/user/profile", getProfile); // GET /user/profile
// router.get("/visitor", getVisitors); // GET /comments
// router.get("/visitor/get", getVisitor); // GET /comment/
// router.post("/visitor/write", addVisitor); // POST /comment
// router.patch("/visitor/edit", editVisitor); // PATCH /comment
// router.delete("/visitor/delete", deleteVisitor); // DELETE /comment/

export default router;
