const Koa = require('koa');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
    console.log('ctx cookie -----',ctx.cookies.get('NAME'))
    console.log('koa 1-----')
    await next();
    console.log('koa 4-----')
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});



// x-response-time

app.use(async (ctx, next) => {
  console.log('koa 2-----')
    const start = Date.now();
    await next();
    console.log('koa 3-----')
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });
  
  // response
  
  app.use(async ctx => {
    ctx.body = 'Hello World'+ ctx.cookies.get('NAME');
  });
  


app.listen(3000);