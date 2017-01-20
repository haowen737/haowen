var router = require('koa-router')();
var comment = require('../../controllers/comment');

router.get('/getComments', comment.getComments);
router.get('/getReply/:id', comment.getReply);
router.post('/addComment', comment.addComment);
router.post('/reply', comment.addReply);

module.exports = router;
