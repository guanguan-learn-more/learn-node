let http = require("http");
const fs = require("fs");
let server = http.createServer(function(req, res) {
  if (req.url == "/getFile") {
    fs.readFile("../tmp/b.txt", (err, file) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(file);
    });
    // fs.createReadStream("../tmp/b.txt").pipe(res);
  } else if (req.url === "/post") {
    var content = "";

    //data事件会在数据接收过程中，每收到一段数据就触发一次，接收到的数据被传入回调函数。end事件则是在所有数据接收完成后触发

    req.on("data", function(chunk) {
      content += chunk;
    });

    req.on("end", function() {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("You've sent: " + content);
      res.end();
    });
  } else {
    res.end("404 Not Found!");
  }
});
server.listen(1334, () => console.log("服务端启动===>"));



// curl -v -H "Cookie: foo=bar; baz=val" "http://127.0.0.1:1334/getFile"
