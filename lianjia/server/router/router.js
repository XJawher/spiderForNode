const Router = require('koa-router');
const router = new Router();
const controller = require('../controller/controller');

router.all('/api/testapi', controller['/api/testapi']);
router.all('/api/lianjia/xian', controller['/api/lianjia/xian']);
router.all('/api/lianjia/chengdu', controller['/api/lianjia/chengdu']);
router.all('/api/getxian', controller['/api/getxian']);
router.all('/api/getchengdu', controller['/api/getchengdu']);
router.all('/api/lianjia/city', controller['/api/lianjia/city']);
router.all('/api/city', controller['/api/city']);

module.exports = router;