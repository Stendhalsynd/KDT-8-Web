const ws = require("ws");
const PORT = 8000;
const express = require("express");
const e = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const wss = new ws.Server({ port: PORT });

wss.on("connection", (socket) => {
  console.log("클라이언트가 연결되었습니다.");

  socket.on("message", (message) => {
    console.log(`클라이언트로부터 받은 메시지: ${message}`);

    socket.send(`서버메시지: ${message}`);
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
