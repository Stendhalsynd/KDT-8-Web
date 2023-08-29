const ws = require("ws");
const express = require("express");
const http = requrie("http");
const app = express();
const server = http.createServer(app);

const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

// 웹소켓 서버 접속
const wss = new ws.Server({ server });
// 브라우저(클라이언트)들을 담을 변수선언
// const sockets = [];
// socket 변수는 접속한 브라우저
wss.on("connection", (socket) => {
  console.log("클라이언트가 연결되었습니다.");
  // sockets 배열에 브라우저 추가
  // sockets.push(socket);

  socket.on("message", (message) => {
    // 웹소켓을 통해 클라이언트와 서버간의 데이터를 주고받을때는 일반적으로
    // 문자열 또는 버퍼형태로 전달됨
    // 서버가 모두 다른환경이기 때문에 객체를 전달할 때는 객체를 일련의
    // 바이트로 변환하는 직렬화 과정이 필요하다. => 버퍼를 쓰는 이유
    console.log(`template string message : ${message}`);
    console.log(", connect message : ", message);

    // 클라이언트로 응답 메시지 전송
    // socket.send(`서버메시지: ${message}`);
    const { name, msg } = JSON.parse(message);
    console.log("name, msg : ", name, msg);
    wss.clients.forEach((socket) => {
      socket.send(`${message}`);
    });
  });

  // 오류
  socket.on("error", (err) => {
    console.log("에러가 발생했습니다.", err);
  });
  //접속종료
  socket.on("close", () => {
    console.log("클라이언트와 연결이 종료됨");
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
