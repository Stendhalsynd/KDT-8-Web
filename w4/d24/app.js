const express = require("express");

const app = express();
const PORT = 8000;

// 뷰엔진
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/public", express.static("./public"));


app.get("/main", (req, res) => {
  res.render("main", {data: "main"});
});
app.get("/domain1", (req, res) => {
  res.render("domain1", {data: "domain1"});
});
app.get("/domain2", (req, res) => {
  res.render("domain2", {data: "domain2"});
});
app.get("/domain3", (req, res) => {
  res.render("domain3", {data: "domain3"});
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
});
