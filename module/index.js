const m = require('./a');
console.log(module)
console.log(exports)
console.log(module.exports === exports);//指向同一个对象

console.log('从a文件中引入',m)

