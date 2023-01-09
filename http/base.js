const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('req',req.url,req.method)
    const str = `返回结果：${req.url}-${req.method}`;
    //中文乱码
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.setHeader('X-Name', 'JoyGuan');
    res.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
    res.end(str);
})

// server.on('request',(req,res)=>{
//     console.log('on request',req)
// })

server.listen(1337, "127.0.0.1",()=>{
    console.log("Server running at http://127.0.0.1:1337/");
})
