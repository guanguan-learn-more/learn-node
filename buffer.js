// // 生成一个256字节的Buffer实例
// var bytes = Buffer.alloc(256);

// // 遍历每个字节，写入内容
// for (var i = 0; i < bytes.length; i++) {
//   bytes[i] = i;
// }

// // 生成一个buffer的view
// // 从240字节到256字节
// var end = bytes.slice(240, 256);

// end[0] // 240
// end[0] = 0;
// end[0] // 0





// // Buffer.alloc 和 Buffer.allocUnsafe 创建 Buffer
// // Buffer.alloc 创建 Buffer,创建一个大小为6字节的空buffer，经过了初始化
// let buf1 = Buffer.alloc(6);

// // Buffer.allocUnsafe 创建 Buffer，创建一个大小为6字节的buffer，未经过初始化
// let buf2 = Buffer.allocUnsafe(6);

// console.log('1111',buf1); // <Buffer 00 00 00 00 00 00>
// console.log('222',buf2); // <Buffer 00 e7 8f a0 00 00>


// let buf3 = Buffer.from("hello", "utf8");
// console.log('333',buf3); // <Buffer 68 65 6c 6c 6f>

// // 数组成员为十进制数
// let buf4 = Buffer.from([1, 2, 3]);

// console.log('444',buf4); // <Buffer 01 02 03>

// let buf5 = Buffer.from([0xe4, 0xbd, 0xa0, 0xe5, 0xa5, 0xbd]);

// console.log('555',buf5); // <Buffer e4 bd a0 e5 a5 bd>
// console.log(buf5.toString("utf8")); // 你好

// console.log(Buffer.concat([buf3,buf5]).toString())


// var buf = Buffer.from('just some data');
// var chunk = buf.slice(5, 9);
// chunk.toString()
// console.log(chunk,chunk.toString())


// const buf = Buffer.from('Node.js 技术栈', 'UTF-8');

// console.log(buf.toString()); // <Buffer 4e 6f 64 65 2e 6a 73 20 e6 8a 80 e6 9c af e6 a0 88>
// console.log(buf.length); // 17


// var buf = Buffer.alloc(5);
// buf.write('He');
// buf.write('l', 2);
// buf.write('lo', 3);
// console.log('node 调试',buf.toString());


// example.js
/**
 * 单位为字节格式为 MB 输出
 */
const format = function (bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB';
};

/**
 * 封装 print 方法输出内存占用信息 
 */
const print = function() {
    const memoryUsage = process.memoryUsage();

    console.log(JSON.stringify({
        rss: format(memoryUsage.rss),
        heapTotal: format(memoryUsage.heapTotal),
        heapUsed: format(memoryUsage.heapUsed),
        external: format(memoryUsage.external),
    }));
}

function Quantity(num) {
    if (num) {
        return new Array(num * 1024 * 1024);
    }

    return num;
}

function Fruit(name, quantity) {
    this.name = name
    this.quantity = new Quantity(quantity)
}

let apple = new Fruit('apple');
print();
let banana = new Fruit('banana', 20);
print();
banana = null;
global.gc(); //node  --expose-gc buffer.js
print();

