// Node单进程 单线程

// 1. 如何充分利用多核CPU服务器？
// 2. 如何保证进程的健壮性和稳定性？(一个进程崩溃，整个应用崩溃)

// QPS(Queries Per Second)意思是“每秒查询率”，是一台服务器每秒能够响应的查询次数，是对一个特定的查询服务器在规定时间内所处理流量多少的衡量标准。
// 假设每次响应服务耗用的时间稳定为N秒，这类服务的QPS为1/N。


// 主从模式：Master-Worker模式

const http = require('http');
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/plain'});
 res.end('Hello World\n');
}).listen(Math.round((1 + Math.random()) * 1000), '127.0.0.1'); 


// node worker.js
// node master.js
//ps aux | grep worker.js查看到进程的数量


// guan             83316   0.0  0.0  4268328    708 s007  S+    4:17下午   0:00.00 grep worker.js
// guan             83301   0.0  0.1  4547604  20380 s006  S+    4:17下午   0:00.05 /Users/guan/.nvm/versions/node/v12.18.0/bin/node ./worker.js
// guan             83300   0.0  0.1  4549652  20396 s006  S+    4:17下午   0:00.05 /Users/guan/.nvm/versions/node/v12.18.0/bin/node ./worker.js
// guan             83299   0.0  0.1  4566292  20424 s006  S+    4:17下午   0:00.05 /Users/guan/.nvm/versions/node/v12.18.0/bin/node ./worker.js
// guan             83298   0.0  0.1  4532244  20288 s006  S+    4:17下午   0:00.05 /Users/guan/.nvm/versions/node/v12.18.0/bin/node ./worker.js
// guan             83297   0.0  0.1  4558868  20428 s006  S+    4:17下午   0:00.05 /Users/guan/.nvm/versions/node/v12.18.0/bin/node ./worker.js
// guan             83296   0.0  0.1  4549652  20432 s006  S+    4:17下午   0:00.05 /Users/guan/.nvm/versions/node/v12.18.0/bin/node ./worker.js
// guan             83295   0.0  0.1  4541716  20512 s006  S+    4:17下午   0:00.05 /Users/guan/.nvm/versions/node/v12.18.0/bin/node ./worker.js
// guan             83294   0.0  0.1  4560916  20336 s006  S+    4:17下午   0:00.05 /Users/guan/.nvm/versions/node/v12.18.0/bin/node ./worker.js
// guan             83293   0.0  0.1  4559892  20432 s006  S+    4:17下午   0:00.05 /Users/guan/.nvm/versions/node/v12.18.0/bin/node ./worker.js
// guan             83292   0.0  0.1  4568340  20432 s006  S+    4:17下午   0:00.05 /Users/guan/.nvm/versions/node/v12.18.0/bin/node ./worker.js
// guan             83291   0.0  0.1  4550676  20424 s006  S+    4:17下午   0:00.05 /Users/guan/.nvm/versions/node/v12.18.0/bin/node ./worker.js
// guan             83290   0.0  0.1  4543764  20356 s006  S+    4:17下午   0:00.05 /Users/guan/.nvm/versions/node/v12.18.0/bin/node ./worker.js
// guan             83272   0.0  0.1  4541460  18104 s004  S+    4:17下午   0:00.06 node worker.js

