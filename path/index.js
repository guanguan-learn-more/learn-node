const path = require('path');


const fPath='/page/index.html'
console.log(path.extname(fPath))
console.log(path.extname(fPath,'.js'))
console.log(path.extname(__filename))

// node path/index.js


