"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 모델
// db에 User 생성
db.User = require("./User")(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
