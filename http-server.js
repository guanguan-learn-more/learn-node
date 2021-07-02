let http = require("http");
const fs = require("fs");
let server = http.createServer(function(req, res) {
  if (req.url == "/getData") {
    // fs.readFile("./tmp/file1.txt", (err, data) => {
    //   res.statusCode = 200;
    //   res.setHeader("Content-Type", "text/plain");
    //   res.end(data);
    // });
    fs.createReadStream("./tmp/file2.txt").pipe(res);
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
server.listen(8000, () => console.log("服务端启动===>"));
