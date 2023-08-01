const express = require("express");
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 뷰엔진
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("signup", { title: "실습1. axios get 회원가입" });
});

app.get("/axios", (req, res) => {
  console.log("backend", req.query);
  res.send(req.query);
});

app.post("/axios", (req, res) => {
  console.log("backend", req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
