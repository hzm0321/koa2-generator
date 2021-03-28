import json from 'koa-json';
import path from 'path';
import views from 'koa-views';
import logger from 'koa-logger';
import parameter from 'koa-parameter';
import bodyparser from 'koa-bodyparser';

export default app => {
  // 请求body
  app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
  }));

  // 参数校验
  app.use(parameter(app));

  // 返回json格式
  app.use(json());

  // 打印接口请求日志
  app.use(logger());

  // 静态文件地址
  app.use(require('koa-static')(path.join(__dirname, '/public')));

  app.use(views(path.join(__dirname, '/views'), {
    extension: 'pug'
  }));
};
