const net = require("net");

const server = net.createServer((socket) => {
  socket.on("data", () => {
    socket.write("你好，TCP，开始连接");
  });
  socket.on("end", () => {
    console.log("断开连接");
  });
  socket.write('欢迎光临TCP')
});

server.listen('8080',()=>{
    console.log('绑定端口')
})

// node tcp.js
// brew install telnet
// telnet local 8080 