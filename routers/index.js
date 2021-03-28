import requireDirectory from 'require-directory';
import Router from 'koa-router';

class InitManager {
  static init(app) {
    InitManager.app = app;
    InitManager.initLoadRouters();
  }

  // 路由自动注册
  static initLoadRouters() {
    // 获取api目录的绝对路径
    const apiDirectory = `${process.cwd()}/routers`;
    requireDirectory(module, apiDirectory, {
      visit: (router, path, name) => {
        if (router instanceof Router) {
          // 根据文件路径生成路由前缀
          if (!router.opts.prefix) {
            let prefix = path
              .slice(__dirname.length)
              .replace(/\.[^ .]+$/, '')
              .replace(/\[(.+?)\]/g, params => (`:${params.slice(1, params.length - 1)}`));
            const end = 'index.js';
            if (name === end) {
              prefix = prefix.slice(0, prefix.length - end.length + 2);
            }
            router.prefix(prefix);
          }
          InitManager.app.use(router.routes());
        }
      }
    });
  }
}

export default InitManager;
