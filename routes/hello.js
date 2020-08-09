const router = require('koa-router')()
const { hello, world } = require('../controllers/hello');

router.prefix('/hello');

router.get('/', hello);

router.post('/', world);

module.exports = router
