// const Visitor = require("../model/Visitor");
import {
  getVisitors as getVisitorList,
  addVisitor as addComment,
} from "../model/Visitor.js";
import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));

const main = (req, res) => {
  res.render("index");
};

const getVisitors = (req, res) => {
  // console.log("getVisitorList() : ", getVisitorList());
  // res.render("visitor", { data: getVisitorList() });

  // mysql 연결 후
  getVisitorList((result) => {
    res.render("visitor", { data: result });
  });
};

const addVisitor = (req, res) => {
  const name = req.body.name;
  const comment = req.body.comment;
  addComment(name, comment, (insertedData) => {
    getVisitorList((result) => {
      res.render("visitor", { data: result });
    });
  });
};

export { main, getVisitors, addVisitor };
