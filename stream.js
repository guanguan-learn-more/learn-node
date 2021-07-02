const fs = require("fs");
const path = require("path");
var zlib = require("zlib");
//*********** DEMO1:基本API ************
//可读流
// const Readable = require('stream').Readable;
// const writeSrteam = fs.createWriteStream('./file1.txt')
// const readStream = new Readable();
// readStream.push('guanqingchao');
// readStream.push('Success!');
// readStream.push(null);
// readStream.pipe(writeSrteam);

// const readStream = fs.createReadStream("./file1.txt");
// let data = "";
// let chunk = "";
// readStream.setEncoding("utf8");

//读取数据有两种方式:1. data 2. readable read()
// readStream.on('data',(chunk)=>{
//   console.log('chunk=========>',readStream.read())
//   if(chunk){
//     data += chunk;
//   }
// })

//readable事件表示系统缓冲之中有可读的数据，使用read方法去读出数据。如果没有数据可读，read方法会返回null。
// readStream.on("readable", function() {
//   while ((chunk = readStream.read()) !== null) {
//     data += chunk;
//   }
// });

// readStream.on("end", () => {
//   console.log("读取完毕********************", data);
// });

// fs.createReadStream('./file2.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('file2.gz'));

//可写流
// const readStream = fs.createReadStream("./file1.txt");
// const writeSrteam = fs.createWriteStream("./file2.txt");
// let data = "";
// let chunk = "";
// readStream.setEncoding("utf8");
// readStream.on("data", chunk => {
//   //可读流读到数据的时候向可写流写入数据
//   //write可接收字符串 buffer stream
//   writeSrteam.write(chunk, () => {
//     console.log("向文件中写入数据 ====?", chunk);
//   });
//   writeSrteam.end('ENDING!!!')
// });
// //当缓存数据全部写入完成，可以继续写入时，会触发drain事件，表示缓存空了。
// //可写流可以接受更多的数据时
// writeSrteam.on("drain", chunk => {
//   console.log("缓存空了=====>", chunk);
// });

//********* DEMO2: 大文件 **************

// const file = fs.createWriteStream('./tmp/bigFile.txt');
// for(let  i = 0;i<=1e6;i++) {
//     file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit.hahahahaahahhahhahha \n');
// }
// file.end();

// const server = require('http').createServer();
// // server.on('request', (req, res) => {
// //     fs.readFile('./tmp/bigFile.txt', (err, data) => {
// //         if(err) throw err;
// //         res.end(data);
// //     })
// // });
// server.on('request', (req, res) => {
//   const src = fs.createReadStream('./tmp/bigFile.txt');
//   src.pipe(res);
// });

// server.listen(8000);


// const readabble = fs.createReadStream('./file1.txt');
// const writable = fs.createWriteStream('./file2.txt');
// readabble.pipe(writable)

//**************** DEMO3:多文件合并 *****************
// const fs = require("fs");
// const path = require("path");

// function streamMerge(sourceFiles, targetFile) {
//   const scripts = fs.readdirSync(path.resolve(__dirname, sourceFiles)); //获取目录下的文件
//   const fileWriteStream = fs.createWriteStream(
//     path.resolve(__dirname, targetFile)
//   ); //创建可写流
//   streamMergeRecursive(scripts, fileWriteStream); //递归合并
// }

// function streamMergeRecursive(scripts, fileWriteStream) {
//   //递归完毕
//   if (!scripts.length) {
//     fileWriteStream.end("合并完毕！");
//     return;
//   }
//   const currentFile = path.resolve(__dirname, "tmp/", scripts.shift());
//   const currentReadable = fs.createReadStream(currentFile);
//   currentReadable.pipe(fileWriteStream, { end: false });
//   currentReadable.on("end", () => {
//     streamMergeRecursive(scripts, fileWriteStream);
//   });
//   currentReadable.on('error', function(error) { // 监听错误事件，关闭可写流，防止内存泄漏
//     console.error(error);
//     fileWriteStream.close();
//   });
// }
// streamMerge('./tmp','./mergeFile.js')


// *******************DEMO4:实现流
// const Readable = require('stream').Readable

// class ToReadable extends Readable {
//   constructor(iterator) {
//     super()
//     this.iterator = iterator
//   }

//   // 子类需要实现该方法
//   // 这是生产数据的逻辑
//   _read() {
//     const res = this.iterator.next()
//     if (res.done) {
//       // 数据源已枯竭，调用`push(null)`通知流
//       return this.push(null)
//     }
//     setTimeout(() => {
//       // 通过`push`方法将数据添加到流中
//       this.push(res.value + '\n')
//     }, 0)
//   }
// }

// const iterator = function (limit) {
//   return {
//     next: function () {
//       if (limit--) {
//         return { done: false, value: limit + Math.random() }
//       }
//       return { done: true }
//     }
//   }
// }(1e10)

// const readable = new ToReadable(data)

// // 监听`data`事件，一次获取一个数据
// readable.on('data', data => process.stdout.write(data))
// // 所有数据均已读完
// readable.on('end', () => process.stdout.write('DONE'))


// const Writable = require('stream').Writable

// const writable = Writable()
// // 实现`_write`方法
// // 这是将数据写入底层的逻辑
// writable._write = function (data, enc, next) {
//   // 将流中的数据写入底层
//   process.stdout.write(data.toString().toUpperCase())
//   // 写入完成时，调用`next()`方法通知流传入下一个数据
//   process.nextTick(next)
// }

// // 所有数据均已写入底层
// writable.on('finish', () => process.stdout.write('DONE'))

// // 将一个数据写入流中
// writable.write('a' + '\n')
// writable.write('b' + '\n')
// writable.write('c' + '\n')

// // 再无数据写入流时，需要调用`end`方法
// writable.end()

// var Duplex = require('stream').Duplex

// var duplex = Duplex()

// // 可读端底层读取逻辑
// duplex._read = function () {
// //   this._readNum = this._readNum || 0
// //   if (this._readNum > 1) {
// //     this.push(null)
// //   } else {
// //     this.push('' + (this._readNum++))
// //   }
// this.push('uroeuowhfgoewhoioiwhgewoi');
// this.push('22222');
// this.push(null);

// }

// // 可写端底层写逻辑
// duplex._write = function (buf, enc, next) {
//   // a, b
//   process.stdout.write('_write ' + buf.toString() + '\n')
//   next()
// }

// // 0, 1
// duplex.on('data', data => console.log('ondata', data.toString()))

// duplex.write('a')
// duplex.write('b')

// duplex.end()


const Transform = require('stream').Transform

class Rotate extends Transform {
  constructor(n) {
    super()
    // 将字母旋转`n`个位置
    this.offset = (n || 13) % 26
  }

  // 将可写端写入的数据变换后添加到可读端
  _transform(buf, enc, next) {
    var res = buf.toString().split('').map(c => {
      var code = c.charCodeAt(0)
      if (c >= 'a' && c <= 'z') {
        code += this.offset
        if (code > 'z'.charCodeAt(0)) {
          code -= 26
        }
      } else if (c >= 'A' && c <= 'Z') {
        code += this.offset
        if (code > 'Z'.charCodeAt(0)) {
          code -= 26
        }
      }
      return String.fromCharCode(code)
    }).join('')

    // 调用push方法将变换后的数据添加到可读端
    this.push(res)
    // 调用next方法准备处理下一个
    next()
  }

}

var transform = new Rotate(3)
transform.on('data', data => process.stdout.write(data))
transform.write('hello, ')
transform.write('world!')
transform.end()





