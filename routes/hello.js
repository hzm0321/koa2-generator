import Router from 'koa-router';
import { hello, world } from '../controllers/hello';

const router = Router();

router.prefix('/hello');

router.get('/', hello);

router.post('/', world);

module.exports = router
