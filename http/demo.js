const http = require("http");
const fs = require("fs");
const mime = require("mime");

// ===========DEMO1: MIMIE =========

// http
//   .createServer(function (req, res) {
//     // res.writeHead(200, { "Content-Type": "text/plain" });
//     res.writeHead(200, { "Content-Type": "text/html" }); //浏览器访问 会渲染成html
//     res.end("<html><body>Hello World</body></html>\n");
//   })
//   .listen(1337, "127.0.0.1");
// console.log("Server running at http://127.0.0.1:1337/");

// curl http://127.0.0.1:1337

// MIME的全称是Multipurpose Internet Mail Extensions，
// Content-type : text/plain text/html  text/javascript  image/* application/*
// Content-Type: multipart/form-data; boundary=something

// ============ DEMO2: 模拟附件下载 =======

// http
//   .createServer(function (req, res) {

//     const stream = fs.createReadStream("./wow.txt");
//     res.setHeader("Content-type", "text/plain");
//     res.setHeader(
//       "Content-Disposition",
//       'attachment; filename=wow.txt'
//     );
//     res.writeHead(200);
//     stream.pipe(res);
//   })
//   .listen(1337, "127.0.0.1");
// console.log("Server running at http://127.0.0.1:1337/");

// ===========DEMO3:JSON ============
http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify(json));
});
