const path = require('path');
const express = require('express')

const app = express();

const router = require('./routes');//引入路由
const port = 3000;


//定义中间件
const middleware1 = (req,res,next)=>{
    console.log('这是middleware 1');
    req.startTime = Date.now(); //共享
    next()
}
// 注册全局中间件
app.use(middleware1);//注意和route中间件顺序
app.use((req,res,next)=>{
    console.log('这是middleware 2');
    next()
})
app.use(router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })