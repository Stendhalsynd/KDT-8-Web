const express = require("express");
const app = express();
const PORT = 8000;

// 뷰엔진
app.set("view engine", "ejs");
app.set("/views", express.static(__dirname + "/views"));
app.set("/static", express.static(__dirname + "/static"));
// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
