var router = require('koa-router')();
var user_router = require('./user_router');
var comment_router = require('./comment_router');

console.log('11=========', comment_router);
router.use('/users', user_router.routes(), user_router.allowedMethods());
router.use('/comment', comment_router.routes(), comment_router.allowedMethods());

module.exports = router;
