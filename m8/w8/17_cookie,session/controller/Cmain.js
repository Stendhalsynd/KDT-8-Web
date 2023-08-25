// const model = require('../model/Model');
const { User } = require("../models");
const bcrypt = require("bcrypt");

//쿠키 설정
const cookieConfig = {
  httpOnly: true,
  maxAge: 60 * 1000, //1분
};

///////////////////////////////////////
//GET
const main = (req, res) => {
  //쿠키사용

  res.render("index", { cookie: req.cookies });
  // 메인 페이지 접속시 쿠키값을 사용해서 로그인 해주세요 alert 창 표시하기
};
//회원가입 페이지
const signup = (req, res) => {
  //쿠키생성
  //res.cookie(쿠키이름, 쿠키값, 옵션객체)
  res.cookie("testCookie", "test", cookieConfig);
  res.render("signup");
};
//로그인 페이지
const signin = (req, res) => {
  console.log("userInfo : ", req.session.userInfo);
  if (req.session.userInfo) {
    // 세션을 활용해서 로그인 성공시 회원 전체 리스트 페이지 접속
    // 회원리스트 표시
    // 상단에 접속자 이름 표시
    console.log("실행됨");
    res.redirect(`/users`);
    // res.redirect(`/profile/${req.session.userInfo.id}`);
  } else {
    res.render("signin");
  }
};
//회원정보 조회 페이지
const profile = (req, res) => {
  console.log(req.params);
  console.log(req.session.userInfo, req.sessionID);
  // model.db_profile(req.params, (result) => {
  //     res.render('profile', { data: result[0] });
  // });
  //findOne 데이터베이스에서 하나의 정보를 찾을 때 사용, 객체 반환
  //where 는 객체형태로 찾을 정보를 입력
  User.findOne({
    where: { id: req.params.init },
  }).then((result) => {
    res.render("profile", { data: result });
  });
};
const buy = () => {};

////////////////////////////////////////////////
//POST
//회원가입
const post_signup = async (req, res) => {
  // model.db_signup(req.body, () => {
  //     res.json({ result: true });
  // });
  const { userid, name, pw } = req.body;
  //create 데이터 생성
  //실습과제 - 비밀번호 암호화하여 저장
  const hash = await bcryptPassword(pw);
  User.create({
    userid,
    name,
    pw: hash,
  }).then(() => {
    res.json({ result: true });
  });
};

const post_signin = async (req, res) => {
  // model.db_signin(req.body, (result) => {
  //     if (result.length > 0) {
  //         res.json({ result: true, data: result[0] });
  //     } else {
  //         res.json({ result: false });
  //     }
  // });
  //실습과제 - 로그인
  const { userid, pw } = req.body;
  //step1 아이디를 찾아서 사용자 존재 유/무 체크
  const user = await User.findOne({
    where: { userid },
  });
  // const user = {
  //     id: 1,
  //     userid: 'asdf',
  //     name: '홍길동',
  //     pw: '@@@@@@@@@@'
  // }

  if (user) {
    //step2 입력된 비밀번호와 기존 데이터와 비교
    //사용자가 존재함
    const result = await compareFunc(pw, user.pw);
    if (result) {
      //비밀번호 일치
      req.session.userInfo = { name: user.name, id: user.id };
      res.json({ result: true, data: user });
    } else {
      //비밀번호 틀림
      res.json({ result: false, message: "비밀번호가 틀렸습니다." });
    }
  } else {
    //사용자가 존재하지 않음
    res.json({ result: false, message: "존재하는 사용자가 없습니다" });
  }
};
///////////////////////////////////////////
//PATCH
const edit_profile = (req, res) => {
  // model.db_profile_edit(req.body, () => {
  //     res.json({ result: true });
  // });
  //update( 수정될 정보를 객체형태로 입력, 수정될 곳 객체 입력  )
  const { name, pw, id } = req.body;
  User.update({ name, pw }, { where: { id } }).then(() => {
    res.json({ result: true });
  });
};

/////////////////////////////////////////////
//DELETE
//회원탈퇴 destory()
const destroy = (req, res) => {
  const { id } = req.body;
  User.destroy({
    where: { id },
  }).then(() => {
    //쿠키삭제
    //res.clearCookie(쿠키이름)
    res.clearCookie("testCookie");
    //세션삭제
    req.session.destroy();
    res.json({ result: true });
  });
};

const view_list = async (req, res) => {
  //   const users = JSON.stringify(result, null, 2);

  //   console.log("users : ", users);
  if (req.session.userInfo) {
    User.findAll().then((result) => {
      res.render("list", { name: req.session.userInfo.name, result });
    });
  } else {
    res.render("signin");
  }
};

module.exports = {
  main,
  signup,
  signin,
  profile,
  buy,
  post_signup,
  post_signin,
  edit_profile,
  destroy,
  view_list,
};

///////////////////////////function
//암호화
//화살표함수 축약형 {} 삭제, return 삭제 (한줄코드일때사용!!)
const bcryptPassword = (password) => bcrypt.hash(password, 11);
//비교
const compareFunc = (password, dbpass) => bcrypt.compare(password, dbpass);
