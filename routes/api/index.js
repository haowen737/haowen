var router = require('koa-router')();
var user_router = require('./user_router');
var comment_router = require('./comment_router');
var article_router = require('./article_router');

router.use('/users', user_router.routes(), user_router.allowedMethods());
router.use('/comment', comment_router.routes(), comment_router.allowedMethods());
router.use('/article', article_router.routes(), article_router.allowedMethods());

module.exports = router;
