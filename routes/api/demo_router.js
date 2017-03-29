var router = require('koa-router')();
var demo = require('../../controllers/demo');

router.get('/getDemos', demo.getDemos);

module.exports = router;
