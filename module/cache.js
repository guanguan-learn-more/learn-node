require('./a.js')
require('./a.js')
require('./a.js') //多次引用，a文件只执行了一次

require('./b')


console.log('require',require)