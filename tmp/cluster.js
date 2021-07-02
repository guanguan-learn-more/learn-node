
const net = require("net");
process.on("message", function(m, handle) {
  start(handle);
});

var buf = "hello nodejs";
var res =
  ["HTTP/1.1 200 OK", "content-length:" + buf.length].join("\r\n") +
  "\r\n\r\n" +
  buf;


const resMap = {}
function start(server) {
  server.listen();
  server.onconnection = function(err, handle) {
    console.log("worker进程请求 got a connection on worker, pid = %d", process.pid);
    if(resMap[process.pid]){
        resMap[process.pid]++
    } else {
        resMap[process.pid] = 1
    }
    console.log('请求情况',resMap)
    var socket = new net.Socket({
      handle: handle
    });
    socket.readable = socket.writable = true;
    socket.end(res);
  };
}
