// 创建子进程

// child_process模块给予Node可以随意创建子进程（child_process）的能力。它提供了4个方
// 法用于创建子进程。
//  spawn()：启动一个子进程来执行命令。
//  exec()：启动一个子进程来执行命令，与spawn()不同的是其接口不同，它有一个回调函数获知子进程的状况。
//  execFile()：启动一个子进程来执行可执行文件。
//  fork()：与spawn()类似，不同点在于它创建Node的子进程只需指定要执行的JavaScript文 件模块即可。


// spawn()与exec()、execFile()不同的是，后两者创建时可以指定timeout属性设置超时时间， 一旦创建的进程运行超过设定的时间将会被杀死。
// exec()与execFile()不同的是，exec()适合执行已有的命令，execFile()适合执行文件。


//  类型     回调/异常  进程类型  执行类型   可设置超时
// spawn()     ×        任意    命令         ×
// exec()      √        任意    命令         √
// execFile()  √        任意   可执行文件     √
// fork()      ×        Node JavaScript文件  ×



const  cp = require('child_process')
// cp.spawn('node', ['worker.js']);  // node worker.js
// cp.exec('node worker.js', function (err, stdout, stderr) {
//  // some code
// });
// cp.execFile('worker.js', function (err, stdout, stderr) {
//  // some code
// });
// cp.fork('./worker.js')


