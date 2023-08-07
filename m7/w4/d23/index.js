// import express from "express";
const express = require("express");

const app = express();
const PORT = 8000;

// 뷰엔진
app.set("view engine", "ejs");
app.set("views", "./views");

// 정적인 파일 불러오기
// app.use("/views", express.static(__dirname + "/views"));
// app.use("/public", express.static("./public"));
app.use(express.static("public"));

// app.get("/", function (req, res) {
//   // res.send("hello express");
//   res.send({
//     result: true,
//     code: 1000,
//     message: "회원가입에 성공했습니다.",
//     data: { name: "yunes" },
//   });
// });

app.get("/test", function (req, res) {
  // res.render("test");
  res.render("test", { data: 3 });
});

app.get("/try", function (req, res) {
  // res.render("test");
  res.render("try");
});

app.get("/fruit", (req, res) => {
  res.render("fruit");
});

app.get("/multiply", function (req, res) {
  res.render("multiply", { data: 3 });
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
});
