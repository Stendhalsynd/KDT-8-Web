const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;
const db = require("./models");

// 뷰엔진
app.set("view engine", "ejs");
app.set("/views", express.static(__dirname + "/views"));
app.set("/static", express.static(__dirname + "/static"));
// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes/student");
app.use("/", router);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
