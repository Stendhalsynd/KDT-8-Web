// const mod = require("./module.js");
// const connect = require("./module.js");

// import { a, b } from "./module.js";
// import connect from "./module.js";
import http from "http";
import fs from "fs/promises";

// console.log(connect());
// console.log(a, b);

// const server = http.createServer((req, res) => {
//   res.writeHead(200);
//   res.write("<h1>Hello World</h1>");
//   res.end("<p>end</p>");
// });

// server.listen(8080, function () {
//   console.log("8080번 포트로 서버 실행");
// });

const server = http.createServer(async function (req, res) {
  try {
    const data = await fs.readFile("./index.html");
    res.writeHead(200);
    res.end(data);
  } catch (error) {
    console.log(error);
    res.writeHead(404);
    res.end(error.message);
  }
});

server.listen(8080, function () {
  console.log("8080번 포트로 서버 실행");
});
