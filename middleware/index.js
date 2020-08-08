const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const views = require('koa-views');
const json = require('koa-json');

module.exports = (app) => {
  // 请求body
  app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
  }))

  // 返回json格式
  app.use(json());

  // 打印接口请求日志
  app.use(logger());

  // 静态文件地址
  app.use(require('koa-static')(__dirname + '/public'));

  app.use(views(__dirname + '/views', {
    extension: 'pug'
  }))
}
