var router = require('koa-router')();
var user = require('../../controllers/user');

router.get('/getUser', user.getUser);
router.post('/registerUser', user.registerUser);
router.post('/login', user.login);

module.exports = router;
