const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;
const SECRET = "secretKey";

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 뷰엔진
app.set("view engine", "ejs");
app.set("/views", express.static(__dirname + "/views"));
app.set("/static", express.static(__dirname + "/static"));

const userInfo = { id: "홍지훈", pw: "myPw" };

app.get("/", (req, res) => {
  const auth = req.headers.authorization || "none";
  const token = auth.split(" ")[1];

  res.render("default", { token, userInfo });
});

app.post("/login", (req, res) => {
  const { id } = req.body;
  const token = jwt.sign({ id }, SECRET);
  console.log(token);
  res.render("default", { token, userInfo });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
