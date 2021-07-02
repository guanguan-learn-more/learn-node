console.log('b模块start');

exports.test = 2; 

const a = require('./module-a.js');

//返回的是一个 a.js 模块的 exports 对象 未完成的副本
console.log(22222222,a) // { test: 1 } 仅仅暴露出已经加载的a文件中执行的

console.log('undeclaredVariable: ', undeclaredVariable);

console.log('b模块加载完毕: a.test值：', a.test,a.testB);