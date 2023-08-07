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
  res.render("login", { title: "실습2. axios post 로그인" });
});

const id = "아이디";
const pw = "qlqjs";

app.post("/axios", (req, res) => {
  console.log("backend", req.body);
  const input_id = req.body.id;
  const input_pw = req.body.pw;

  res.send(
    input_id === id && input_pw === pw
      ? "로그인 성공"
      : "아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인하세요."
  );
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
