// import {
//   // getVisitors as getVisitorList,
//   // getVisitor as getComment,
//   // addVisitor as addComment,
//   // editVisitor as editComment,
//   // deleteVisitor as deleteComment,
//   setSignup as addUser,
//   getUser as login,
//   editProfile as editUser,
//   getProfile as getUser,
//   deleteProfile as deleteUser,
// } from "../model/User.js";
// import express from "express";

// import models from "../models";
const express = require("express");
const models = require("../models");

const app = express();
app.use(express.urlencoded({ extended: true }));

const main = (req, res) => {
  res.render("index");
};

// 됨
const getUsers = (req, res) => {
  models.User.findAll().then((result) => {
    res.render("sequalize", { data: result });
  });
};

// req.query.id 를 전달하지 않음
const getUser = (req, res) => {
  models.User.findOne({
    // where: { id: req.query.id },
    where: { id: 19 },
  }).then((result) => {
    res.render("sequalize2", { data: [result] });
  });
};

// 안해봄
const addUser = (req, res) => {
  models.User.create({
    // userid: req.body.userid,
    // name: req.body.name,
    // pw: req.body.pw,
    userid: "user30",
    name: "name30",
    pw: "pw30",
  }).then((result) => {
    res.render("sequalize2", { data: [result] });
  });
};

// 안해봄
const updateUser = (req, res) => {
  models.User.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: {
        id: 6,
      },
    }
  ).then((result) => {
    res.render("sequalize2", { data: [result] });
  });
};

// 안해봄
const deleteUser = (req, res) => {
  models.User.destory({
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    res.render("sequalize2", { data: [result] });
  });
};

const getSignup = (req, res) => {
  res.render("signup");
};

const setSignup = (req, res) => {
  const userid = req.body.userid;
  const name = req.body.name;
  const pw = req.body.pw;
  addUser(userid, name, pw, (result) => {
    res.render("index");
  });
};

const getSignin = (req, res) => {
  res.render("signin");
};

// const setSignin = (req, res) => {
//   const userid = req.body.userid;
//   const pw = req.body.pw;
//   login(userid, pw, (result) => {
//     if (result.length === 1) {
//       res.render("profile", { name: result[0].name });
//       // res.redirect("/user/profile");
//     } else {
//       res.redirect("signin");
//     }
//   });
// };

// 현재 코드와 동일한 내용

const setSignin = async (req, res) => {
  const userid = req.body.userid;
  const pw = req.body.pw;
  try {
    login(userid, pw, (result) => {
      if (result.length === 1) {
        // 로그인 성공시
        res.json({ success: true, name: result[0].name });
      } else {
        // 로그인 실패시
        res.json({ success: false });
      }
    });
  } catch (error) {
    console.error("로그인 처리 에러:", error);
    res.status(500).json({ success: false });
  }
};

const getProfile = (req, res) => {
  res.render("profile", { name: req.query.name });
};

const editProfile = (req, res) => {
  const oldName = req.body.oldName;
  const newName = req.body.newName;

  getUser(oldName, (result) => {
    editUser(newName, result[0]?.id, () => {
      console.log("test");
      alert("회원 정보 수정!");
    });
  });
};

const deleteProfile = (req, res) => {
  const name = req.body.name;
  getUser(name, (result) => {
    deleteUser(result[0].id, () => {
      res.json({ success: true });
    });
  });
};

// const getVisitors = (req, res) => {
//   // console.log("getVisitorList() : ", getVisitorList());
//   // res.render("visitor", { data: getVisitorList() });

//   // mysql 연결 후
//   getVisitorList((result) => {
//     res.render("visitor", { data: result });
//   });
// };

// const getVisitor = (req, res) => {
//   const id = req.query.id;
//   getComment(id, (result) => {
//     getVisitorList((list) => {
//       res.render("visitor_get", { data: list, viewData: result });
//     });
//   });
// };

// const addVisitor = (req, res) => {
//   const name = req.body.name;
//   const comment = req.body.comment;
//   addComment(name, comment, (insertedData) => {
//     getVisitorList((result) => {
//       res.render("visitor", { data: result });
//     });
//   });
// };

// const editVisitor = (req, res) => {
//   const id = req.body.id;
//   const name = req.body.name;
//   const comment = req.body.comment;
//   editComment(name, comment, id, (insertedData) => {
//     getVisitorList((result) => {
//       res.render("visitor", { data: result });
//     });
//   });
// };

// const deleteVisitor = (req, res) => {
//   const id = req.body.id;
//   deleteComment(id, (result) => {
//     getVisitorList((list) => {
//       // console.log("list : ", list);
//       res.render("visitor", { data: list });
//     });
//   });
// };

// export {
//   getUsers,
//   main,
//   getSignup,
//   setSignup,
//   getSignin,
//   setSignin,
//   getProfile,
//   editProfile,
//   deleteProfile,
// };

module.exports = {
  getUsers,
  getUser,
  main,
  getSignup,
  setSignup,
  getSignin,
  setSignin,
  getProfile,
  editProfile,
  deleteProfile,
};
