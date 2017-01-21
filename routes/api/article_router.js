var router = require('koa-router')();
var article = require('../../controllers/article');

router.get('/getArticles', article.getArticles);
router.post('/like', article.likeArticles);

module.exports = router;
