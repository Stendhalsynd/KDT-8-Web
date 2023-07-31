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
app.get("/", (req, res) => {
  // res.send("Hello");
  res.render("index", { title: "폼 실습" });
});

app.get("/getForm", (req, res) => {
  console.log(req.query);
  // res.render("index", { title: "폼 실습" });
  // res.send("get 요청 성공!");
  res.render("result", {
    title: "GET 요청 폼 결과 확인하기",
    userInfo: req.query,
  });
});

app.post("/", (req, res) => {
  console.log(req);
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  // res.send("post 요청 성공!");
  res.render("result", {
    title: "POST 요청 폼 결과 확인하기",
    userInfo: req.body,
  });
});

app.post("/body", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
