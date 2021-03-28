/**
 * 批量导入路由
 */
import fs from 'fs';

export default (app) => {
  fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js') {
      return
    }
    const route = require(`./${file}`)
    app.use(route.routes(), route.allowedMethods())
  });
};
