const multer = require("multer");
const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 뷰엔진
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
