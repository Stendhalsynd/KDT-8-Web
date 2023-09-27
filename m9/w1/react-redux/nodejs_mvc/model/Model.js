const mysql = require("mysql");

//mysql연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "kdt",
  password: "",
  database: "kdt",
  port: 3306,
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
});

// const users = [
//   {
//     id: 1,
//     name: "이름1",
//     gender: "여",
//     major: "기계공학",
//   },
//   {
//     id: 2,
//     name: "이름2",
//     gender: "여",
//     major: "전기공학",
//   },
//   {
//     id: 3,
//     name: "이름3",
//     gender: "남",
//     major: "컴퓨터공학",
//   },
//   {
//     id: 4,
//     name: "이름4",
//     gender: "여",
//     major: "기계공학",
//   },
//   {
//     id: 5,
//     name: "이름5",
//     gender: "남",
//     major: "생명공학",
//   },
// ];

// module.exports = users;
