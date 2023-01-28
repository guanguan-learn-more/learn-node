// module.exports.userName = 'Joy';
// exports.age = 18


// exports.name = 'guan';
// module.exports = {
//     age:18
// }


// module.exports.sayName = function(){
//     console.log('say Name')
// }
// exports = {
//     name:'guan'
// }

console.log('执行了a文件')

exports = {
    name:'exports',
    like:'money'
}

module.exports = exports;
module.exports.age='18'

console.log('a文件中的exports',exports)