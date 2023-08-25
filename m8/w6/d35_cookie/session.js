const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 세션
// 옵션객체
// httpOnly: 값을 true 로 하면 사용자가 자바스크립트를 통해서 세션을
// 사용할 수 없도록 강제
// sequre: 값을 true 로 하면 https 에서만 세션을 주고받는다.
// secret: 안전하게 쿠키를 전송하기 위해 쿠키 서명 값
// ( 세선을 발급할때 사용되는 키 )
// resave: 세션에 수정사항이 생기지 않더라도 매 요청 (req) 마다 세션을
// 다시 저장할 것 인지 물어본다. 덮어쓰기 가능하게 할지
// saveUninitialized: 세션에 저장할 내역이 없더라도 처음부터 세션을
// 생성할지 설정한다.
app.use(
  session({
    secret: "mySessionKey", // 쿠키 서명 값
    resave: false,
    saveUninitialized: true,
    // saveUninitialized: false,
  })
);

// app.get("/", (req, res) => {
//   req.session.name = "홍길동"; // express-session 에서 제공
//   res.send("세션 설정 완료");
// });

app.get("/", (req, res) => {
  res.render("default");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/main", (req, res) => {
  req.session.name = req.body.name;
  res.render("main", { name: req.session.name });
});

app.get("/name", (req, res) => {
  res.send(req.session.name);
});

app.get("/destroy", (req, res) => {
  // 쿠키는 res.clearCookie
  // 세션은 req 를 사용
  req.session.destroy(() => {
    res.redirect("/"); // 세션 만료시 리다이렉트
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
