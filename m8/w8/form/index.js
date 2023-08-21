const express = require("express");
const app = express();
const PORT = 8000;

//ejs
app.set("view engine", "ejs");
// views 라는 설정을 다른 폴더를 바꿀때 쓰는 옵션
// views 라는 폴더를 기본으로 사용할때는 입력하지 않아도 된다.
// views 라는 설정을 바꾸고 싶은 커스텀 디렉토리를 두번째 인자로 전달한다.
app.set("views", "./views");
//body-parser
// req.body POST 전송일때 사용한다.
// extended:true 는 중첩된 객체표현을 허용할지 말지를 결정한다.
// application.x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
// 페이지 지정시 미들웨어 use 를 사용한다.
// app.use("/", (req, res) => {
//   // render : 페이지를 렌더링 render('페이지 이름', 데이터)
//   res.render("index");
// });
// 같은 url 로 get, post 를 만들 수 있으나 use 로는 접근할 수 없다.
// use 는 모든 method를 다 받아와서 어떤 경로든 항상 index.ejs 를 열게 된다.
// 404 일때는 상관없어서 use 를 사용해도 된다.

// router
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/getForm", (req, res) => {
  const { ID, PW } = req.query;
  res.render("getForm", {
    title: "GET요청 결과 확인",
    userInfo: { ID, PW },
  });
});

app.post("/postForm", (req, res) => {
  const { ID, PW } = req.body;
  res.render("postForm", {
    title: "POST요청 결과 확인",
    userInfo: { ID, PW },
  });
});

app.use("*", (req, res) => {
  res.render("404");
});

//server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
