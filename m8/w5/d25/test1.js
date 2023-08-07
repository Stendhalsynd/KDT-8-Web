const express = require("express");
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 뷰엔진
app.set("view engine", "ejs");
app.set("views", "./views");

// router

app.get("/get", (req, res) => {
  res.render("signup", { title: "실습1. get으로 정보받기" });
});

app.get("/signup", (req, res) => {
  console.log(req.query);
  res.render("signup_result", {
    title: "실습1. get으로 정보받기",
    userInfo: req.query,
  });
});

app.get("/post", (req, res) => {
  res.render("signup2", { title: "실습2. post로 정보받기" });
});

app.post("/signup2", (req, res) => {
  console.log(req.body);
  res.render("signup_result2", {
    title: "실습2. 결과",
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
