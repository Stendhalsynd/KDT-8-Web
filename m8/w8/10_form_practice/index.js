const express = require("express");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
//view engine
app.set("view engine", "ejs");

//router
app.get("/", (req, res) => {
  res.render("index");
});
//get으로 정보 받기
app.get("/getPage", (req, res) => {
  res.render("get");
});
app.get("/resultGet", (req, res) => {
  const { username, gender, birthYear, birthMonth, birthDay, hobby } =
    req.query;
  res.render("result", {
    getUserInfo: {
      username,
      gender,
      birthYear,
      birthMonth,
      birthDay,
      hobby,
    },
    postUserInfo: {},
  });
  //코드 실습
});
//post로 정보 받기
app.get("/postPage", (req, res) => {
  res.render("post");
});
app.post("/resultPost", (req, res) => {
  //코드 실습
  const {
    username,
    gender,
    birthYear,
    birthMonth,
    birthDay,
    hobby,
    color,
    number,
  } = req.body;
  res.render("result", {
    getUserInfo: {},
    postUserInfo: {
      username,
      gender,
      birthYear,
      birthMonth,
      birthDay,
      hobby,
      color,
      number,
    },
  });
});

//서버오픈
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
