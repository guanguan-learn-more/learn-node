// /tmp/daemon.js
// const fs = require('fs');
// const { Console } = require('console');

// // custom simple logger
// const logger = new Console(fs.createWriteStream('../log/stderr.log'), fs.createWriteStream('../log/stdout.log'));

// setInterval(function() {
//     logger.log('daemon pid: ', process.pid, ', ppid: ', process.ppid);
// }, 1000 * 10);




//DEMO:端口占用

const http = require("http");
http
  .createServer((req, res) => {
    res.end("端口占用I am worker, pid: " + process.pid + ", ppid: " + process.ppid);
  })
  .listen(5000);
