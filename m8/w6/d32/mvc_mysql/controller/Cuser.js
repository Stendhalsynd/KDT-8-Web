import {
  // getVisitors as getVisitorList,
  // getVisitor as getComment,
  // addVisitor as addComment,
  // editVisitor as editComment,
  // deleteVisitor as deleteComment,
  setSignup as addUser,
  getUser as login,
} from "../model/User.js";
import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));

const main = (req, res) => {
  res.render("index");
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

const setSignin = (req, res) => {
  const userid = req.body.userid;
  const pw = req.body.pw;
  login(userid, pw, (result) => {
    if (result.length === 1) {
      res.render("profile");
    } else {
      res.render("signin");
    }
  });
};

const getProfile = (req, res) => {
  res.render("profile");
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

export {
  main,
  getSignup,
  setSignup,
  getSignin,
  setSignin,
  getProfile,
  // getVisitors,
  // getVisitor,
  // addVisitor,
  // editVisitor,
  // deleteVisitor,
};
