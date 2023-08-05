// const express = require("express");
// const controller = require("../controller/Cvisitor");
import express from "express";
import { main, getVisitors, addVisitor } from "../controller/Cvisitor.js";
const router = express.Router();

// localhost:PORT/
router.get("/", main); // GET /
router.get("/visitor", getVisitors); // GET /comments
// router.get("/visitor/get", getVisitor); // GET /comment/:id
router.post("/visitor/write", addVisitor); // POST /comment
// router.patch("/visitor/edit", editComment); // PATCH /comment
// router.delete("/visitor/delete", deleteComment); // DELETE /comment/

export default router;
