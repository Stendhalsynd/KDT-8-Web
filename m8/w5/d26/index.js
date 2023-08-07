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
  res.render("index", { title: "폼 실습" });
});

app.get("/ajax", (req, res) => {
  console.log("backend", req.query);
  res.send(req.query);
});

app.post("/ajax", (req, res) => {
  console.log("backend", req.body);
  res.send(req.body);
});

app.get("/axios", (req, res) => {
  console.log("backend", req.query);
  res.send(req.query);
});

app.post("/axios", (req, res) => {
  console.log("backend", req.body);
  res.send(req.body);
});

app.get("/fetch", (req, res) => {
  console.log("backend", req.query);
  res.send(req.query);
});

app.post("/fetch", (req, res) => {
  console.log("backend", req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
