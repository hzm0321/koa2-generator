import Koa from 'koa';
import onerror from 'koa-onerror';
import middleware from './middleware';
import routers from './routes';

const app = new Koa()

// error handler
onerror(app);

// 中间件
middleware(app);

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 路由
routers(app);

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
