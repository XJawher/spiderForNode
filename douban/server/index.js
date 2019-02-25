const Koa = require('koa');
const app = new Koa();
const router = require('./router/router');
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3456);
console.log('server is running on 3456');
