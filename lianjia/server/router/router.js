const Router = require('koa-router');
const router = new Router();
const controller = require('../controller/controller');

router.all('/api/testapi', controller['/api/testapi']);
// router.all('/api/lianjia/xian', controller['/api/lianjia/xian']);
// router.all('/api/lianjia/chengdu', controller['/api/lianjia/chengdu']);
// router.all('/api/getxian', controller['/api/getxian']);
// router.all('/api/getchengdu', controller['/api/getchengdu']);
// router.all('/api/lianjia/city', controller['/api/lianjia/city']);
router.all('/api/city/bj', controller['/api/city/bj']);
router.all('/api/city/xian', controller['/api/city/xian']);
router.all('/api/city', controller['/api/city']);
router.all('/api/city/sort', controller['/api/city/sort']);
router.all('/api/city/condition', controller['/api/city/condition']);
router.all('/api/city/get', controller['/api/city/get']);
router.all('/api/city/rankings', controller['/api/city/rankings']);
router.all('/api/city/xianNewTotal', controller['/api/city/xianNewTotal']);
router.all('/api/update/gettime', controller['/api/update/gettime']);
router.all('/api/update/settime', controller['/api/update/settime']);
router.all('/api/city/xian/insert', controller['/api/city/xian/insert']);
router.all('/api/get/city', controller['/api/get/city']);

module.exports = router;