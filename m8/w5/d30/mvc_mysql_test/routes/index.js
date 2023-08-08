import express from "express";
import {
  main,
  getVisitors,
  getVisitor,
  addVisitor,
  editVisitor,
  deleteVisitor,
} from "../controller/Cuser.js";
const router = express.Router();

// localhost:PORT/
router.get("/", main); // GET /
router.get("/visitor", getVisitors); // GET /comments
router.get("/visitor/get", getVisitor); // GET /comment/
router.post("/visitor/write", addVisitor); // POST /comment
router.patch("/visitor/edit", editVisitor); // PATCH /comment
router.delete("/visitor/delete", deleteVisitor); // DELETE /comment/

export default router;
