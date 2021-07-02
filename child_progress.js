//***************** DEMO1:创建进程 - spawn ******************
// const { spawn } = require("child_process");
// var ls = spawn('ls', ['-al']);
// ls.stdout.on('data', function(data){
//     console.log('data from child: ' + data);
// });
// ls.stderr.on('data', function(data){
//     console.log('error from child: ' + data);
// });
// ls.on('close', function(code){
//     console.log('child exists with code: ' + code);
// });

// const spawn = require('child_process').spawn;
// const ls = spawn('bash',['-c', 'echo "hello nodejs" | wc'], {
//     stdio: 'inherit',
//     shell: true
// });
// ls.on('close', function(code){
//     console.log('child exists with code: ' + code);
// });

// const spawn = require('child_process').spawn;
// const child = spawn('bad_command');
// //命令bad_command不存在
// child.on('error', (err) => {
//   console.log('Failed to start child process 1.');
// });
// //参数不存在报错
// const child2 = spawn('ls', ['nonexistFile']);
// child2.stderr.on('data', function(data){
//     console.log('Error msg from process 2: ' + data);
// });
// child2.on('error', (err) => {
//   console.log('Failed to start child process 2.');
// });

// var spawn = require('child_process').spawn;
// var grep = spawn('grep', ['nodejs']);

// setTimeout(function(){
//     grep.stdin.write('hello nodejs \n hello javascript');
//     grep.stdin.end();
// }, 2000);
// grep.stdout.on('data', function(data){
//     console.log('data from grep: ' + data);
// });
// grep.on('close', function(code){
//     console.log('grep exists with code: ' + code);
// });

// echo "hello nodejs" | grep "nodejs"
// const child_process = require('child_process');
// const echo = child_process.spawn('echo', ['hello nodejs']);
// const grep = child_process.spawn('grep', ['nodejs']);

// grep.stdout.setEncoding('utf8');
// echo.stdout.setEncoding('utf8');
// echo.stdout.on('data', function(data){
//     grep.stdin.write(data);
// });
// echo.on('close', function(code){
//     if(code!==0){
//         console.log('echo exists with code: ' + code);
//     }
//     grep.stdin.end();
// });

// grep.stdout.on('data', function(data){
//     console.log('grep: ' + data);
// });

// grep.on('close', function(code){
//     if(code!==0){
//         console.log('grep exists with code: ' + code);
//     }
// });

// const child = require('child_process');
// const cat = child.spawn('cat',['./tmp/file2.txt']);
// const sort  = child.spawn('sort');
// const uniq = child.spawn('uniq');
// sort.stdout.setEncoding('utf8');
// uniq.stdout.setEncoding('utf8');

// cat.stdout.pipe(sort.stdin);
// sort.stdout.on('data',data=> console.log('sort',data));

// sort.stdout.pipe(uniq.stdin);
// uniq.stdout.on('data',data=> console.log('uniq',data));

// uniq.stdout.pipe(process.stdout);

//***************** DEMO2:创建进程 - exec ******************
// const { exec } = require("child_process");
// exec("find . -type f | wc -l", (err, stdout, stderr) => {
//   if (err) {
//     console.error(`exec error: ${err}`);
//     return;
//   }
//   console.log(`Number of files ${stdout}`);
// });
// exec("ls ./tmp", function(error, stdout, stderr) {
//   if (error) {
//     console.error("error: " + error);
//     return;
//   }
//   console.log("stdout: \n" + stdout);
// });

//***************** DEMO3:创建进程 - execFile ******************
// const { execFile } = require("child_process");
// execFile("echo", ["hello", "world"], function(err, stdout) {
//   console.log(stdout);
// });

//***************** DEMO4:创建进程 - fork ******************

// const { fork } = require("child_process");
// // 1、默认 silent 为 false，子进程会输出 output from the child3
// fork('./tmp/child_process.js', {
//   silent: false
// });
// // 2、设置 silent 为 true，则子进程不会输出
// fork('./tmp/child_process.js', {
//   silent: true
// });
// // 3、通过 stdout 属性，可以获取到子进程输出的内容
// const child = fork("./tmp/child_process.js", {
//   silent: false
// });
// child.stdout.setEncoding('utf8');
// child.stdout.on("data", function(data) {
//   console.log("stdout 中输出：", data);
// });
// const {fork} = require('child_process');
// const forked = fork('./tmp/child_process.js');
// forked.on('message', (msg) => {
//     console.log('messsgae from child', msg);
// });

// forked.send({hello: 'world'});

//**************DEMO5: */

// const http = require('http');
// const server = http.createServer();

// const longComputation = () => {
//     let sum = 0;
//     console.info('计算开始');
//     console.time('计算耗时');
//     for (let i = 0; i < 1e10; i++) {
//         sum += i
//     };
//     console.info('计算结束');
//     console.timeEnd('计算耗时');
//     return sum;
// };

// server.on('request', (req, res) => {
//     if (req.url === '/compute') {
//        const sum = longComputation();
//        return res.end(`Sum is ${sum}`);
//     } else {
//        res.end('Ok');
//     }
// });
// server.listen(3000, '127.0.0.1', () => {
//     console.log(`server started at http://127.0.0.1:${3000}`);
// });

//当请求 /compute 时，服务器将不能处理其他的请求

// const http = require("http");
// const fork = require("child_process").fork;

// const server = http.createServer((req, res) => {
//   if (req.url == "/compute") {
//     const compute = fork("./tmp/child_compute.js");
//     compute.send("开启一个新的子进程");
//     // 当一个子进程使用 process.send() 发送消息时会触发 'message' 事件
//     compute.on("message", sum => {
//       res.end(`Sum is ${sum}`);
//       compute.kill();
//     });

//     // 子进程监听到一些错误消息退出
//     compute.on("close", (code, signal) => {
//       console.log(
//         `收到close事件，子进程收到信号 ${signal} 而终止，退出码 ${code}`
//       );
//       compute.kill();
//     });
//     console.log('继续执行其他……')
//   } else {
//     res.end(`ok`);
//   }
// });

// server.listen(3000, "127.0.0.1", () => {
//   console.log(`server started at http://127.0.0.1:${3000}`);
// });

//当我们收到需要长时间计算的请求时，可以执行它，而主线程一点儿也不会被阻塞，可以处理其他的请求。

//****************DEMO6:多进程 ********** */
// const fork = require("child_process").fork;
// const cpus = require("os").cpus();

// console.log("cpu个数", cpus.length);
// process.title = "node-master";

// const server = require("net").createServer();
// server.listen(3000);

// const workers = {};
// const createWorker = () => {
//   const worker = fork("./tmp/child_work.js");
//   //接收子进程消息
//   worker.on("message", function(message) {
//     if (message.act === "suicide") {
//       createWorker();
//     }
//   });
//   //子进程退出
//   worker.on("exit", function(code, signal) {
//     console.log("worker process exited, code: %s signal: %s", code, signal);
//     delete workers[worker.pid];
//   });
//   //向子进程发送消息
//   worker.send("server", server);
//   workers[worker.pid] = worker;
//   console.log(
//     "worker process created, pid: %s ppid: %s",
//     worker.pid,
//     process.pid
//   );
// };

// for (let i = 0; i < cpus.length; i++) {
//   createWorker();
// }

// process.once("SIGINT", close.bind(this, "SIGINT")); // kill(2) Ctrl-C
// process.once("SIGQUIT", close.bind(this, "SIGQUIT")); // kill(3) Ctrl-\
// process.once("SIGTERM", close.bind(this, "SIGTERM")); // kill(15) default
// process.once("exit", close.bind(this));

// function close(code) {
//   console.log("进程退出！", code);
//   if (code !== 0) {
//     for (let pid in workers) {
//       console.log("master process exited, kill worker pid: ", pid);
//       workers[pid].kill("SIGINT");
//     }
//   }
//   process.exit(0);
// }

//****************DEMO7:进程守护******** */
// const spawn = require('child_process').spawn;

// function startDaemon() {
//     const daemon = spawn('node', ['daemon.js'], {
//         cwd: '/',
//         detached : true,
//         stdio: 'ignore',
//     });

//     console.log('守护进程开启 父进程 pid: %s, 守护进程 pid: %s', process.pid, daemon.pid);
//     daemon.unref();
// }

// startDaemon()

//**************DEMO8:孤儿进程 *******/
// master.js
// const fork = require('child_process').fork;
// const server = require('net').createServer();
// server.listen(3000);
// const worker = fork('./tmp/child_guer.js');

// worker.send('server', server);
// console.log('worker process created, pid: %s ppid: %s', worker.pid, process.pid);
// process.exit(0); // 创建子进程之后，主进程退出，此时创建的 worker 进程会成为孤儿进程

//**************DEMO9:端口占用 *******/

console.log('Whats wrone with you????')

const { fork } = require("child_process");
const cpus = require("os").cpus;
for (let i = 0; i < cpus; i++) {
  const worker = fork("./tmp/child_deamon.js");
  console.log(
    "端口占用DEMO",
    "worker process created, pid: %s ppid: %s",
    worker.pid,
    process.pid
  );
}
