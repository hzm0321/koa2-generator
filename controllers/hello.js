class Hello {
  async hello(ctx) {
    ctx.body = {
      success: true,
      message: 'hello world'
    }
  }
}

module.exports = new Hello();
