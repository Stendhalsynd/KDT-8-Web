import mysql from "mysql";

const conn = mysql.createConnection({
  host: "localhost",
  user: "db",
  password: "db123",
  database: "mydb",
});

const getVisitors = (callback) => {
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    if (err) throw err;

    console.log("Visitor.js: ", rows);
    callback(rows);
  });
};

const addVisitor = (name, comment, callback) => {
  // MySQL의 INSERT 문을 사용하여 데이터를 DB에 추가
  const sql = `INSERT INTO visitor (name, comment) VALUES (?, ?)`;
  conn.query(sql, [name, comment], (err, result) => {
    if (err) throw err;
    // 콜백 함수로 추가된 데이터를 전달
    callback(result);
  });
};

export { getVisitors, addVisitor };

// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가 왔다." },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };
