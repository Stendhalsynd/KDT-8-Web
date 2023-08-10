const express = require("express");
const models = require("../models");

const app = express();
app.use(express.urlencoded({ extended: true }));

exports.index = (req, res) => {
  res.render("index");
};
