const mysql = require("mysql");

//mysql연결
// createConnection : 단일연결, 한번 쿼리 실행되면 끊기고
// 다시 실행할때 다시 연결되어 대용량일때 매우느리다.
// 요청할 때마다 새로운 연결을 생성한다.
// 적은 수의 동시연결이나 단순한 데이터베이스 쿼리일때 사용한다.
// createPool : 다중 연결, pool 이라는 공간에 미리 저장해뒀다가
// 대기상태로 두고 사용한다. 사용 가능한 인원도 제한할 수 있다.
// 연결 풀을 생성한다. 풀은 미리 정의된 수의 연결을 생성하고
// 관리한다. 요청이 들어오면 연결 풀에서 사용 가능한 연결을 제공
// 작업 완료 후 해당 연결을 반환한다.
// 연결이 필요하지 않을 경우 자동으로 반환, 풀의 연결 수를 제한하고
// 관리를 최적화한다.

// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root1234",
//   database: "mydb",
//   port: 3306,
// });

const conn = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "mydb",
  port: 3306,
  connectionLimit: 30, // 최대 연결 수 ( 기본 값은 10 )
});

// 문자열 보간방법
// 단점
// 1. sql 인젝션 공격에 취약
// 2. 문자열에 특수문자가 포함될 경우 오류가 발생할 수 있다.
// Prepared Statement 라는 방법으로 해결
// insert into user (userid, pw, name) values (?, ?, ?);
// 명칭이 ? placeholder

// 회원가입 정보 데이터베이스 저장
const db_signup = (data, cb) => {
  const query = "INSERT INTO user (userid, pw, name) values (?, ?, ?)";
  conn.query(query, [data.userid, data.pw, data.name], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("db_signup", rows);
    cb();
  });
  //   const query = `INSERT INTO user (userid, pw, name) values ('${data.userid}', '${data.pw}', '${data.name}')`;
  //   conn.query(query, (err, rows) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     console.log("db_signup", rows);
  //     cb();
  //   });
};

const db_signin = (data, cb) => {
  //   const query = `select * from user where userid='${data.userid}' and pw='${data.pw}'`;
  const query = "select * from user where userid = ? and pw= ?";
  conn.query(query, [data.userid, data.pw], (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("db_signin", rows);
    cb(rows);
  });
};

const db_profile = (data, cb) => {
  const query = "select * from user where userid = ?";
  conn.query(query, [data.userid], (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    cb(rows);
  });
};

const db_update = (data, cb) => {
  const query = "update user set name = ? where userid = ?";
  conn.query(query, [data.name, data.userid], (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    cb();
  });
};

module.exports = {
  db_signup,
  db_signin,
  db_profile,
  db_update,
};
