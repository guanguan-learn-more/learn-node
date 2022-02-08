const { fork } = require("child_process");
// 1、默认 silent 为 false，子进程会输出 output from the child3
const child = fork("./child_process.js", {
  silent: false,
});
// // 2、设置 silent 为 true，则子进程不会输出
// fork('./child_process.js', {
//   silent: true
// });
// // 3、通过 stdout 属性，可以获取到子进程输出的内容
// const child = fork("./child_process.js", {
//   silent: false
// });

child.on("message", function (m) {
  console.log("PARENT got message:", m);
});
child.send({ hello: "world" });
