class Hello {
  async hello(ctx) {
    ctx.body = {
      success: true,
      message: 'hello world'
    };
  }

  async world(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: true },
      age: { type: 'number', required: false }
    });
    ctx.body = {
      success: true,
      message: '参数校验成功'
    };
  }
}

module.exports = new Hello();
