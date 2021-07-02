//***************DEMO1:惊群 */
// const net = require("net");
// const fork = require("child_process").fork;

// var handle = net._createServerHandle("0.0.0.0", 3001);

// for (var i = 0; i < 4; i++) {
//   fork("./tmp/cluster.js").send({}, handle);
// }

//*********DEMO2:cluster */
var cluster = require("cluster");
var cpuNums = require("os").cpus().length;
var http = require("http");

const resMap = {};

if (cluster.isMaster) {
    console.log('主进程',process.pid)
  for (var i = 0; i < cpuNums; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer(function(req, res) {
      if (resMap[process.pid]) {
        resMap[process.pid]++;
      } else {
        resMap[process.pid] = 1;
      }
      console.log("请求情况", resMap);
      res.end(`response from worker ${process.pid}`,resMap);
    })
    .listen(3002);
  console.log(`Worker ${process.pid} started`);
}
