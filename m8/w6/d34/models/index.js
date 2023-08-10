"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// model
// db.User = require("./User")(sequelize, Sequelize);
db.Student = require("./Students")(sequelize);
db.Courses = require("./Courses")(sequelize);

// relation
db.Student.hasMany(db.Courses, { foreignKey: "student_id" });
db.Courses.belongsTo(db.Student, {
  foreignKey: "student_id",
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
