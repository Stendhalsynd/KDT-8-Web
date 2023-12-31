const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

/** cookie-parser */
// 일반쿠키
app.use(cookieParser());

// 암호화쿠키
// app.use(cookieParser("abcdef"));

/** cookie 옵션 객체 */
const cookieConfig = {
  // httpOnly: 웹 서버를 통해서만 쿠키에 접근가능
  // 자바스크립트에서 document.cookie 를 이용해서 쿠키에 접속하는것을 차단
  // maxAge: 쿠키의 수명 밀리초
  // expires: 만료 날짜를 GMT 시간 설정
  // path: 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고
  // 웹 브라우저는 해당하는 쿠키만 웹 서버에 전송한다.
  // 쿠키가 전송될 URL을 특정할 수 있다. (기본값 : '/')
  // domain: 쿠키가 전송될 도메인을 특정 가능 (기본값: 현재 도메인)
  // secure: 웹 브라우저와 웹 서버가 https 로 통신하는 경우만 쿠키를 서버에 전송
  // signed: 쿠키의 암호화결정 ( req.signedCookies 객체에 들어있다. )
  httpOnly: true,
  maxAge: 10 * 1000, // 1분
  // signed: true, // 암호화시 설정
};

app.get("/cookie", (req, res) => {
  const watchTodayCookie = req.cookies.watchToday;
  if (watchTodayCookie === "true") {
    res.render("cookie", { showModal: false, cookie: req.cookies.watchToday });
  } else {
    res.render("cookie", { showModal: true, cookie: req.cookies.watchToday });
  }
});

app.get("/setCookie", (req, res) => {
  // 쿠키이름, 쿠키값, 옵션객체
  // cookie-parser 가 res.cookie 를 만들어준다.
  res.cookie("myCookie", "myValue", cookieConfig);
  res.send({ result: true, msg: "쿠키 생성 완료" });
});

app.get("/getCookie", (req, res) => {
  // cookie-parser 가 req.cookies 를 생성해준다.
  // 일반 쿠키
  res.send(req.cookies);
  // 암호화 쿠키
  // res.send(req.signedCookies);
});

app.get("/clearCookie", (req, res) => {
  res.clearCookie("myCookie", "myValue", cookieConfig);
  res.send("clear cookie");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
