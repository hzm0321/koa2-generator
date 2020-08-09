const router = require('koa-router')()
const { hello } = require('../controllers/hello');

router.prefix('/hello')

router.get('/', hello);

module.exports = router
