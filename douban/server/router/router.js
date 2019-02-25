const Router = require('koa-router');
const router = new Router();
const controller = require('../controller/controller');

router.all('/api/testapi', controller['/api/testapi']);
router.all('/api/createNews', controller['/api/createNews']);

module.exports = router;