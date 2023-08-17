const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;
const SECRET = "mySecret";

const userInfo = { id: "kdt8", pw: "1234", name: "홍길동", age: 30 };

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  try {
    const { id, pw } = req.body;
    const { id: user_id, pw: user_pw } = userInfo;

    if (id === user_id && pw === user_pw) {
      // 토큰생성
      const token = jwt.sign({ id }, SECRET);
      res.json({ result: true, token });
    } else {
      res.json({ result: false, message: "로그인 정보가 올바르지 않습니다." }); // send 와 json 차이 비교, send 가 보낼 수 있는 타입이 더 많다.
    }
  } catch (error) {
    console.error(error);
  }
});

app.post("/token", (req, res) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const result = jwt.verify(token, SECRET);
      if (result.id === userInfo.id) {
        res.json({ result: true, name: userInfo.name });
      }
    } catch (error) {
      console.error(error);
      res.json({ result: false, message: "인증된 회원이 아닙니다." });
    }
  } else {
    res.redirect("/login");
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
