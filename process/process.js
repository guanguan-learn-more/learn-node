//=========属性=============

// console.log(process.pid);
// console.log(process.argv);
// console.log(process.env);
// console.log(process.platform);
// console.log(process.version);
// console.log(process.title);
// console.log(process.installPrefix);

// process.stdout.write("Hello Node Process!" + "\n");

// const fs = require('fs');
// fs.createReadStream('wow.txt')
//   .pipe(process.stdout);

// var fs = require("fs");
// var zlib = require("zlib");
// fs.createReadStream("wow.txt")
//   .pipe(zlib.createGzip())
//   .pipe(process.stdout);

// process.stdin.pipe(process.stdout)

// process.stdin.setEncoding('utf8');
// process.stdin.on('readable', function() {
//   var chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write('data: ' + chunk);
//   }
// });
// process.stdin.on('end', function() {
//   process.stdout.write('end');
// });

// console.log('命令行参数:',process.argv)
// console.log('node路径',process.execPath)
// console.log('参数',process.execArgv)

// console.log('ENV',process.env.NODE_ENV);

//============方法============
// console.log(process.cwd()); ///Users/guan/Desktop/learn-node
// process.chdir("/Users/guan/Desktop");
// console.log(process.cwd()); ///Users/guan/Desktop

// process.nextTick(function() {
//   console.log("下一次Event Loop即将开始!");
// });

// setTimeout(function() {
//   console.log("已经到了下一轮Event Loop！");
// }, 0);

// function printUsageToStdout() {
//   process.stdout.write("...some long text ...");
// }

// if (true) {
//   printUsageToStdout();
//   // process.exit(1);
//   process.exitCode = 1;
//   throw new Error("xx condition failed");
// }

// process.on("uncaughtException", function(err) {
//   console.error("got an error: %s", err.message);
//   process.exit(1);
// });

// setTimeout(function() {
//   throw new Error("fail");
// }, 100);

process.on("SIGINT", function() {
  console.log("Got a SIGINT. Goodbye cruel world");
  process.exit(0);
});

// 也可以忽略这个信号
process.on("SIGINT", function() {
  console.log("Ignored Ctrl-C");
});

process.kill(process.pid, "SIGINT·");

// process.on("SIGTERM", function() {
//   console.log("terminating");
//   process.exit(1);
// });

// setTimeout(function() {
//   console.log("sending SIGTERM to process %d", process.pid);
//   process.kill(process.pid, "SIGTERM");
// }, 500);

// setTimeout(function() {
//   console.log("never called");
// }, 1000);
