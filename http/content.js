const http = require("http");
const fs = require("fs");
const path = require('path');
const multiparty = require('multiparty')
const mime = require("mime");


// MIME的全称是Multipurpose Internet Mail Extensions，
// Content-type : text/plain text/html  text/javascript  image/* application/*
// Content-Type: multipart/form-data; boundary=something

// ===========DEMO1: MIMIE =========

// http
//   .createServer(function (req, res) {
//     // res.writeHead(200, { "Content-Type": "text/plain" });
//     // res.writeHead(200, { "Content-Type": "text/javascript" });
//     // res.writeHead(200, { "Content-Type": "text/html" }); //浏览器访问 会渲染成html
//     // res.end("<html><body><h1>Hello NodeJS!</h1></body></html>\n");
//   })
//   .listen(1337, "127.0.0.1");
// console.log("Server running at http://127.0.0.1:1337/");

// curl http://127.0.0.1:1337



// ===========DEMO2:JSON ============
// http.createServer((req, res) => {
//     const { url, method } = req;
//     // const query = querystring.parse(url.split('?')[1])
//     // console.log('query====>',query)

//     const result = {
//         error:0,
//         message: 'GET返回成功',
//         result:{
//            data: {
//             name:'JoyGuan',
//             age:18
//            } 
//         }
//     }
//     res.setHeader("Content-Type", "application/json");
//     res.writeHead(200);
//     res.end(JSON.stringify(result));
// }).listen(1337, "127.0.0.1");;


// ============ DEMO3: 文件 =======
// http.createServer((req, res) => {
//     const { url, method } = req;
//     // const content = fs.readFileSync(path.join(__dirname,'/wow.txt'))
//     const content = fs.readFileSync(path.join(__dirname,'../image/photo.jpg'))
//     console.log('content=====>',content)
//     res.setHeader("Content-Type", "image/png");
//     // res.setHeader("Content-Type", "text/plain;charset=utf-8");
//     res.writeHead(200,'ok');
//     res.write(content,'binary');
//     res.end();
// }).listen(1337, "127.0.0.1");

// ============ DEMO3: 图片 动态读取 =======

// http.createServer((req, res) => {
//     const stream=fs.createReadStream(path.join(__dirname,'../image/hat.jpg'))
//     const result = [];
//     stream.on('data',(chunk)=>{
//         console.log('chunk==>',chunk)
//         result.push(chunk)
//     })
//     stream.on('end',()=>{
//         const data = Buffer.concat(result);
//         console.log('data====>',data)
//         res.setHeader("Content-Type", "image/png");
//         res.write(data,'binary');
//         res.end();
//     })
// }).listen(1337, "127.0.0.1");




// ============ DEMO3: 表单 =======
http
    .createServer(function (req, res) {
        // const stream = fs.readFileSync(path.join(__dirname, '/wow.txt'))
        let form = new multiparty.Form()
        form.parse(req,  (err, fields, files)=> {
            console.log('fields, files',fields, files)
            res.end(JSON.stringify({ fields: fields, files: files }));
        });
    })
    .listen(1337, "127.0.0.1");
console.log("Server running at http://127.0.0.1:1337/");

