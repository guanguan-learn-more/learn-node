const fs = require('fs')
const path = require('path');
const http = require('http');

const readStream = fs.createWriteStream(path.join(__dirname, './bigFile1.txt'));

fs.stat(path.join(__dirname, './bigFile1.txt'), (exists) => {
    console.log(exists ? '存在文件' : '不存在', path.join(__dirname, './bigFile1.txt'));
    if (!exists) {
        for (let i = 0; i < 1000000; i++) {
            readStream.write(`line ${i}\n`);
        }
        readStream.end()
        console.log('done')
    }

});



const server = http.createServer()
server.on('request', (request, response) => {
    // 不使用流  179.34 MB
    //   fs.readFile(path.join(__dirname, './bigFile1.txt'), (error, data) => {
    //     if (error) throw error
    //     response.end(data)
    //     console.log('读取传输完毕')
    //   })

    //使用流   3.16 MB
    const readStream = fs.createReadStream(path.join(__dirname, './bigFile1.txt'))
    readStream.pipe(response)

    const used = process.memoryUsage();
    for (let key in used) {
        console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }
    //服务器接收 1 次请求，占用 130 Mb；那如果接受 10 次请求，就是占用 1G。 对服务器的内存消耗是很大的。


})
server.listen(8889)


//http://localhost:8889/


