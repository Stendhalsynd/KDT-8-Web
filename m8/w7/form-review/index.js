const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
  },
  limits: { fileSize: 5 * 1024 * 1024 },
});

const upload = multer({
  // dest: "uploads/",
  storage,
});

//ejs
app.set("view engine", "ejs");
// __dirname : 현재 파일이 포함된 폴더의 절대경로
// __filename : 현재 파일의 절대경로
app.use("/views", express.static(__dirname + "/views"));
app.use("/uploads", express.static(__dirname + "/uploads"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("userfile"), (req, res) => {
  console.log("req.file : ", req.file);
  console.log("req.body : ", req.body);
  res.send("upload!");
});

app.post("/upload/array", upload.array("userfiles"), (req, res) => {
  console.log("req.files : ", req.files);
  console.log("req.body : ", req.body);
  res.send("upload multiple files");
});

app.post(
  "/upload/fields",
  upload.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log("req.files : ", req.files);
    console.log("req.body : ", req.body);
    res.send("upload multiple each");
  }
);

app.post(
  "/dynamicFile",
  upload.single("dynamic-userfile"),
  function (req, res) {
    console.log(req.file);
    console.log(req.body);
    res.send(req.file);
  }
);

//server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
