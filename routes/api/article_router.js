var router = require('koa-router')();
var article = require('../../controllers/article');

router.get('/getArticle/:id', article.getArticle);
router.get('/getArticles', article.getArticles);
router.get('/getTags/:tag', article.getArticlesByTag);
router.get('/getTags', article.getTags);
router.post('/like', article.likeArticles);

module.exports = router;
