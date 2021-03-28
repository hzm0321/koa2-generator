# Koa2基础开发脚手架搭建

## 概述

> koa 是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架。使用 koa 编写 web 应用，通过组合不同的 generator，可以免除重复繁琐的回调函数嵌套，并极大地提升错误处理的效率。koa 不在内核方法中绑定任何中间件，它仅仅提供了一个轻量优雅的函数库，使得编写 Web 应用变得得心应手。

正因为 Koa 的轻量级，没有绑定任何中间件，以至于我们需要在其基础架构上构建属于我们自己的后端基础服务。  
实现的功能主要有：

1. [路由](#router)
    - koa-router 基本路由中间件
    - koa-parameter 路由传参校验
    - koa-bodyparser 正文解析器
    - koa-json 返回 json 内容
2. [资源](#asset)
    - koa-static 静态资源地址映射
    - koa-views 渲染模板页面
3. [数据库](#database)
    - mysql2 MySQL驱动
    - sequelize ORM工具
4. [权限控制](#authorize)
    - jsonwebtoken 生成 token
    - koa-jwt 中间件校验 token
5. [全局错误处理](#error)
    - koa-json-error 中间件错误处理

脚手架特性：

1. 已配置 babel 解析，支持 ES6 包引入方式。
2. 开发模式下热加载
3.

## 项目结构

本项目采用 `MVC 模式`去构建整个工程。MVC 模式在概念上强调 Model、View 和 Controller的分离，模块间也遵循着由 Controller 进行消息处理、Model 进行数据源处理、View
进行数据显示的职责分离原则。因为现代项目大多数采用前后端分离，所以 View 层具体实现不在脚手架中体现。  
因为Koa 项目需要大量的`中间件`去支撑整个项目，所以单独抽离出一个中间件层，用于各类中间件的注入。

### ES6包引入方式支持(已默认添加)

安装所需的 babel 包。

```
yarn add @babel/core @babel/preset-env @babel/register @babel/cli @babel/node
```

项目根目录创建 .babelrc 文件

```json
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

项目根目录创建 index.js 文件

```js
require('@babel/register');
require('./app');
```

脚本启动项增加 `--exec babel-node` 解析，例

```json
  "scripts": {
"dev": "./node_modules/.bin/nodemon bin/www --exec babel-node",
},
```

## eslint 配置(默认已添加)

安装所需的 eslint 包

```
yarn add eslint-config-koa eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node --dev
```

项目根目录创建 .eslintrc 文件

```json
{
  "extends": "koa"
}
```

## <span id="router">路由</span>

koa 的路由实现社区提供了一个成熟的解决方案——`koa-router`。

## <span id="asset">资源</span>
