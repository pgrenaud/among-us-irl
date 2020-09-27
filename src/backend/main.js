let http = require("http").createServer();
let io = require("socket.io")(http);

http.listen(3000, () => {
  console.log("listening on *:3000");
});

io.on("connection", socket => {
  console.log("[" + new Date().toISOString() + "] a user connected");

  socket.on("disconnect", () => {
    console.log("[" + new Date().toISOString() + "] a user disconnected");
  });
});
