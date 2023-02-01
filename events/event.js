// DEMO1: 自定义实现EventEmitter
// const EventEmitter = require("events");
// const Util = require('util')

// const oneDayPlanRun ={
//   '6:00':function(){
//     console.log('上午六点')
//   },
//   '7:00':function(){
//     console.log('上午⑦点')
//   }
// }

// function OneDayPlan(){
//   EventEmitter.call(this);
// }

// Util.inherits(OneDayPlan, EventEmitter);
// // Object.setPrototypeOf(OneDayPlan.prototype,EventEmitter.prototype);
// // Object.setPrototypeOf(OneDayPlan,EventEmitter);

// const oneDayPlan = new OneDayPlan();

// oneDayPlan.on("6:00", function() {
//   oneDayPlanRun["6:00"]();
// });

// oneDayPlan.on("7:00", function() {
//   oneDayPlanRun["7:00"]();
// });

// async function doMain() {
//   oneDayPlan.emit("6:00");

//   await sleep(2000); // 间隔 2 秒钟输出

//   oneDayPlan.emit("7:00");
// }

// doMain();

// async function sleep(s) {
//   return new Promise(function(reslve) {
//       setTimeout(function() {
//           reslve(1);
//       }, s);
//   });
// }

//DEMO2:高并发雪崩 once
// const EventEmitter = require("events").EventEmitter;
// const emitter = new EventEmitter();
// const fs = require("fs");
// const status = {};

// emitter.once('test',()=>{
//   console.log('执行once')
// })
// emitter.on('test',()=>{
//   console.log('执行on')
// })
// emitter.emit('test')
// emitter.emit('test')
// emitter.emit('test')

// const select = (file, filename, cb) => {
//   emitter.once(file, cb);
//   if (status[file] === undefined) {
//     status[file] = "ready";
//   }

//   if (status[file] === "ready") {
//     status[file] = "pending";
//     fs.readFile(file, function(err, result) {
//       console.log(filename, '开始查询');
//       emitter.emit(file, err, result && result.toString());
//       status[file] = "ready";
//       setTimeout(function() {
//         delete status[file];
//       }, 1000);
//     });
//   }
// };

// for (let i = 1; i <= 11; i++) {
//   if (i % 2 === 0) {
//     select(`./tmp/a.txt`, "a 文件", function(err, result) {
//       console.log("err: ", err, "result: ", result);
//     });
//   } else {
//     select(`./tmp/b.txt`, "b 文件", function(err, result) {
//       console.log("err: ", err, "result: ", result);
//     });
//   }
// }

//DEMO3:循环调用
// const events = require('events');
// const emitter = new events.EventEmitter();
// const test = () => console.log('test');

/** 例一 */
// emitter.on('test', function() {
//     test();
//     emitter.emit('test');
// })

// emitter.emit('test');

/** 例二 */
// emitter.on('test', function() {
//     test();
//     emitter.on('test', );
// })

// emitter.emit('test');

//DEMO4:同步
const events = require("events");
const emitter = new events.EventEmitter();

emitter.on("test", function() {
  setImmediate(() => {
    console.log(3333);
  });
  console.log(111);
});
emitter.emit("test");
console.log(222);
