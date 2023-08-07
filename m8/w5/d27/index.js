// import multer from "multer";
// import express from "express";
// import path from "path";
const multer = require("multer");
const express = require("express");
const path = require("path");

const upload = multer({
  dest: "upload/",
  // filename: function (req, file, cb) {
  //   const originalFileName = file.originalname;
  //   const userFileName = req.body.title || "default";
  //   const fileExtension = originalFileName.split(".").pop();
  //   const finalFileName = `${userFileName}.${fileExtension}`;
  //   cb(null, finalFileName);
  // },
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 파일 사이즈 용량 제한
});

const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 정적 파일 업로드
// __dirname : 현재 실행중인 파일의 디렉토리 경로
app.use("/uploads", express.static(__dirname + "/uploads"));

// 뷰엔진
app.set("view engine", "ejs");
app.set("views", "./views");

// router
app.get("/", (req, res) => {
  res.render("index", { title: "업로드 실습" });
});

app.post("/upload", upload.single("userfile"), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  res.send("Upload!");
});

app.post("/upload/array", uploadDetail.array("userfiles"), function (req, res) {
  console.log(req.files);
  console.log(req.body);
  res.send("Upload Multiple Each!");
});

// app.post(
//   "/upload/array",
//   uploadDetail.single("userfiles"),
//   function (req, res) {
//     console.log(req.files);
//     console.log(req.body);
//     res.send("Upload Multiple Each!");
//   }
// );

app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  function (req, res) {
    console.log("req.files : ", req.files);
    console.log("req.body : ", req.body);
    res.send("Upload Multiple Each!");
  }
);

app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userfile"),
  function (req, res) {
    console.log(req.file);
    res.send(req.file);
  }
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
