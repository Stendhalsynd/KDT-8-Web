const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const { expect } = require("vitest");

const PORT = 8001;
const app = express();

const server = http.createServer(app);
const io = new Server(server);

describe("Socket.IO Server", () => {
  let socket;

  beforeAll((done) => {
    server.listen(PORT, done);
  });

  afterAll(() => {
    server.close();
  });

  beforeEach((done) => {
    // Set up a new socket connection for each test
    socket = require("socket.io-client")(`http://localhost:${PORT}`);
    socket.on("connect", done);
  });

  afterEach(() => {
    // Close the socket connection after each test
    if (socket.connected) {
      socket.disconnect();
    }
  });

  it("should emit roomList to connected socket", (done) => {
    socket.on("roomList", (rooms) => {
      expect(rooms).toBeInstanceOf(Array);
      done();
    });
  });

  it("should emit userList to connected socket after creating a room", (done) => {
    const roomName = "testRoom";
    const userName = "testUser";

    socket.emit("create", roomName, userName, () => {
      socket.on("userList", (users) => {
        expect(users).toBeInstanceOf(Array);
        expect(users).toBe(["testUser"]);
        done();
      });
    });
  });

  it("should create a room and emit notice", (done) => {
    socket.on("notice", (message) => {
      expect(message).toContain(socket.id);
      done();
    });

    const roomName = "testRoom";
    const userName = "testUser";

    socket.emit("create", roomName, userName, () => {});
  });

  it("should update roomList and emit userList", (done) => {
    socket.on("roomList", (rooms) => {
      expect(rooms).toContain("testRoom");
    });

    socket.on("userList", (users) => {
      expect(users).toEqual([]);
      done();
    });

    const roomName = "testRoom";
    const userName = "testUser";

    socket.emit("create", roomName, userName, () => {});
  });
});
