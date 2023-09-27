const Users = require("../model/Model");

exports.main = (req, res) => {
  res.render("index", { users: Users });
};

exports.register = (req, res) => {
  const { name, gender, major } = req.body;
  console.log("name, gender, major : ", name, gender, major);
  Users.push({
    id: Users.length + 1,
    name,
    gender,
    major,
  });
  console.log(Users);
  res.send(Users);
};
