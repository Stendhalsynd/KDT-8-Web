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

    callback(rows);
  });
};

const getVisitor = (id, callback) => {
  conn.query(`SELECT * FROM visitor where id = ?`, [id], (err, rows) => {
    if (err) throw err;
    callback(rows);
  });
};

const getUser = (userid, pw, callback) => {
  conn.query(
    `SELECT * FROM user where userid = ? and pw = ?`,
    [userid, pw],
    (err, row) => {
      if (err) throw err;
      callback(row);
    }
  );
};

const getProfile = (name, callback) => {
  conn.query(`SELECT * FROM user where name = ?`, [name], (err, row) => {
    if (err) throw err;
    callback(row);
  });
};

const setSignup = (userid, name, pw, callback) => {
  // MySQL의 INSERT 문을 사용하여 데이터를 DB에 추가
  const sql = `INSERT INTO user (userid, name, pw) VALUES (?, ?, ?)`;
  conn.query(sql, [userid, name, pw], (err, result) => {
    if (err) throw err;
    // 콜백 함수로 추가된 데이터를 전달
    callback(result);
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

const editProfile = (name, id, callback) => {
  const sql = `UPDATE user SET name = ? WHERE id = ?`;
  conn.query(sql, [name, id], (err, result) => {
    if (err) throw err;
    // 콜백 함수로 추가된 데이터를 전달
    // callback(result);
  });
};

const editVisitor = (name, comment, id, callback) => {
  const sql = `UPDATE visitor SET name = ?, comment = ? WHERE id = ?`;
  conn.query(sql, [name, comment, id], (err, result) => {
    if (err) throw err;
    // 콜백 함수로 추가된 데이터를 전달
    // callback(result);
  });
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    if (err) throw err;

    console.log("Visitor.js: ", rows);
    callback(rows);
  });
};

const deleteProfile = (id, callback) => {
  conn.query(`DELETE FROM user where id = ?`, [id], (err, rows) => {
    if (err) throw err;
  });
};

const deleteVisitor = (id, callback) => {
  conn.query(`DELETE FROM visitor where id = ?`, [id], (err, rows) => {
    if (err) throw err;
  });
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    if (err) throw err;

    console.log("Visitor.js: ", rows);
    callback(rows);
  });
};

export {
  setSignup,
  getUser,
  getProfile,
  editProfile,
  deleteProfile,
  // getVisitors,
  // getVisitor,
  // addVisitor,
  // editVisitor,
  // deleteVisitor,
};

// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가 왔다." },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };
