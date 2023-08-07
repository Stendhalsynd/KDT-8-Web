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

const addVisitor = (name, comment, id, callback) => {
  if (!!id) {
    // MySQL의 INSERT 문을 사용하여 데이터를 DB에 추가
    const sql = `UPDATE visitor SET name = ?, comment = ? WHERE id = ?`;
    conn.query(sql, [name, comment, id], (err, result) => {
      if (err) throw err;
      // 콜백 함수로 추가된 데이터를 전달
      callback(result);
    });
  } else {
    // MySQL의 INSERT 문을 사용하여 데이터를 DB에 추가
    const sql = `INSERT INTO visitor (name, comment) VALUES (?, ?)`;
    conn.query(sql, [name, comment], (err, result) => {
      if (err) throw err;
      // 콜백 함수로 추가된 데이터를 전달
      callback(result);
    });
  }
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

const deleteVisitor = (id, callback) => {
  conn.query(`DELETE FROM visitor where id = ?`, [id], (err, rows) => {
    if (err) throw err;
  });
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    if (err) throw err;
    callback(rows);
  });
};

export { getVisitors, getVisitor, addVisitor, editVisitor, deleteVisitor };
