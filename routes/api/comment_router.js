var router = require('koa-router')();
var comment = require('../../controllers/comment');

router.get('/getComments', comment.getComments);
router.post('/addComment', comment.addComment);

module.exports = router;