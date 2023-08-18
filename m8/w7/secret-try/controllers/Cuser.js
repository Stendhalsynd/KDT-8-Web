const express = require("express");
const models = require("../models");
const { User } = models;

const app = express();
app.use(express.urlencoded({ extended: true }));

exports.index = (req, res) => {
  res.render("index");
};

exports.get_login = (req, res) => {
  res.render("login");
};

exports.post_login = async (req, res) => {
  try {
    const { userid, pw } = req.body;
    const user = await User.findOne({
      where: { userid },
    });
    if (comparePassword(pw, user.pw)) {
      res.json({ result: true, name: user.name });
    } else {
      res.json({ result: false, message: "로그인에 실패했습니다." });
    }
  } catch (error) {
    console.error(error);
  }
};

exports.get_signup = (req, res) => {
  res.render("signup");
};

exports.post_signup = async (req, res) => {
  try {
    const { userid, pw, name } = req.body;
    const bcryptPw = bcryptPassword(pw);
    console.log("입력값 : ", userid, pw, name);
    const user = await User.create({
      userid,
      pw: bcryptPw,
      name,
    });
    if (user) {
      res.json({ result: true });
    } else {
      res.json({ result: false, message: "회원가입에 실패했습니다." });
    }
  } catch (error) {
    console.error(error);
  }
};

exports.get_profile = (req, res) => {
  res.render("profile");
};

exports.post_profile = async (req, res) => {
  try {
    const { userid, pw } = req.body;
    const user = await User.findOne({
      where: { userid },
    });
    if (comparePassword(pw, user.pw)) {
      res.json({ result: true, user });
    } else {
      res.json({ result: false, message: "프로필 조회에 실패했습니다." });
    }
  } catch (error) {
    console.error(error);
  }
};

/** bcrypt - 단방향 */
const bcrypt = require("bcrypt");
const saltNumber = 10;

// 암호화
const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, saltNumber);
};

// 비교
const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};
