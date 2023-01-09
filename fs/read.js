const fs = require('fs')
//如果路径没有，则新建文件
fs.writeFile(__dirname+'/demo.txt', 'Hello Node.js！', (err) => {
    if (err) throw err;
    console.log('写入内容成功!');
});
fs.appendFile(__dirname+'/demo.txt', 'This is a append content7777', (err) => {
    if (err) throw err;
    console.log('追加内容成功!');
});

fs.readFile(__dirname+'/demo.txt','utf8',(err,content)=>{
    if(err){
    console.log('err====>',err);//读取成功，err为null
    }
    console.log('读取文件内容====>',content)
})

console.log(__dirname,__dirname+'/demo.txt')
console.log(__filename)
// node fs/read.js