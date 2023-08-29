const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const PORT = 8000;

// http 서버
const httpServer = http.createServer(app);

// socket 서버
const io = new Server(httpServer);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

app.get("/chat", (req, res) => {
  res.render("chat");
});

///////// socket

io.on("connection", (socket) => {
  // 조인 전
  // console.log("조인 전 rooms : ", socket.rooms);

  socket.on("join", (obj) => {
    socket.room = obj.chatroom;
    socket.name = obj.username;
    socket.join(obj.chatroom);

    // 조인 후
    // console.log("조인 후 rooms : ", socket.rooms);

    // 특정 방에 있는 나를 제외한 나머지 사용자들에게 메시지 전달
    socket.broadcast.to(obj.chatroom).emit("userjoin", obj);
  });

  socket.on("message", (message) => {
    // io.to(특정방).emit(이벤트): 특정방에 전체 사용자에게 메시지 전달
    io.to(socket.room).emit("chat", `${socket.name}: ${message}`);
  });

  // [실습1번]
  // socket.on("new_message", (arg, cb) => {
  //   console.log(arg);
  //   cb(arg);
  // });

  // socket.on("new_message2", (arg, cb) => {
  //   console.log(arg);
  //   cb(arg);
  // });

  // socket.io;
});

// 서버 오픈
httpServer.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
