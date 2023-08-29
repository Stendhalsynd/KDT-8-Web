const http = require("http");
const express = require("express");
const { Server } = require("../socketio/node_modules/socket.io/dist");

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

///////// socket

io.on("connection", (socket) => {
  socket.on("message", (arg, cb) => {
    console.log("client : ", arg);
    cb(arg);
  });

  // socket.io;
});

// 서버 오픈
httpServer.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
