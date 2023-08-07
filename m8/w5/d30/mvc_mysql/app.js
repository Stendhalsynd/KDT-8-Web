// const express = require("express");
import express from "express";
import path from "path";
import router from "../mvc_mysql/routes/index.js";
import methodOverride from "method-override";

const __dirname = path.resolve();
const app = express();
const PORT = 8000;

// 뷰엔진
app.set("view engine", "ejs");
app.set("/views", express.static(__dirname + "/views"));
app.set("/static", express.static(__dirname + "/static"));
// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// method-override 미들웨어 추가
app.use(methodOverride("_method"));

// const indexRouter = require("./routes"); // index.js 생략
app.use("/", router);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
