var router = require('koa-router')();
var comment = require('../../controllers/comment');

router.get('/getComments', comment.getComments);

module.exports = router;
