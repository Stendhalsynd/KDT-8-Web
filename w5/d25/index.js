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
// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.get("/", (req, res) => {
  console.log(res.query);
  res.render("index", { title: "폼 실습" });
  // res.send("get 요청 성공!");
});

app.post("/", (req, res) => {
  console.log(req);
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.send("post 요청 성공!");
});

app.post("/body", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
