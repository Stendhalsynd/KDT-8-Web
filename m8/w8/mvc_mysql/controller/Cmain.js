// const Visitor = require("../model/Model");
const model = require("../model/Model");

/** GET */
const main = (req, res) => {
  res.render("index");
};

// 회원가입 페이지
const signup = (req, res) => {
  res.render("signup");
};

// 로그인 페이지
const signin = (req, res) => {
  res.render("signin");
};

/** POST */
// 회원가입
const post_signup = (req, res) => {
  //   res.render("signup");
  model.db_signup(req.body, () => {
    res.json({ result: true });
  });
};

// 로그인
const post_signin = (req, res) => {
  //   res.render("signin");
  model.db_signin(req.body, (result) => {
    if (result.length > 0) {
      res.json({ result: true, data: result[0] });
    } else {
      res.json({ result: false });
    }
  });
};

// res.render : 뷰페이지를(node.js 가 제공하는 템플릿 의미 (ejs, pod, handle bar)) 렌더링 render(뷰페이지 이름, 데이터?)
// res.send : 모든 타입의 데이터 전송
// res.json : 객체 타입 데이터만 전송
// res.redirect : 페이지를 이동 ( 데이터 전송 없음, document.location.href )

/** 회원정보 */
const profile = (req, res) => {
  model.db_profile(req.query, (result) => {
    if (result.length > 0) {
      res.render("profile", { result: true, data: result[0] });
    } else {
      res.json({ result: false });
    }
  });
};

const patch_profile = (req, res) => {
  model.db_update(req.body, (result) => {
    if (result.length > 0) {
      res.json({ result: true });
    } else {
      res.json({ result: false });
    }
  });
};

module.exports = {
  main,
  signup,
  signin,
  post_signup,
  post_signin,
  profile,
  patch_profile,
};
