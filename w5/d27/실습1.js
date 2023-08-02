const multer = require("multer");
const express = require("express");
const path = require("path");

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, req.body.id + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 파일 사이즈 용량 제한
});

const uploadLogin = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, req.body.id + ext);
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
  res.render("실습1", { title: "실습1. 파일 업로드" });
});

app.post(
  "/profile",
  uploadLogin.single("dynamic-userfile"),
  function (req, res) {
    console.log("req.body : ", req.body);
    console.log(req.file);
    res.render("profile", { path: `${req.file.path}` });
  }
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
